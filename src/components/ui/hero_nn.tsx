import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export const HeroNetwork = () => {
    const [text, setText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const [showInput, setShowInput] = useState(true);
    const [showPropagation, setShowPropagation] = useState(false);
    const [showOutput, setShowOutput] = useState(false);
    const [showOutputLabels, setShowOutputLabels] = useState(false);
    const [showEnterKey, setShowEnterKey] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const fullText = "Olá, I'm";

    // Animation controls for each connection
    const inputHiddenControls = useAnimation();
    const hiddenOutputControls = useAnimation();

    // Refs for the connection paths
    const inputHiddenPaths = useRef([]);
    const hiddenOutputPaths = useRef([]);

    const EnterKey = ({ onAnimationComplete }) => {
        // x and y values for both layouts
        const position = isSmallScreen ? {
            x: 340,  // Adjusted to be right of "Olá, I'm" in mobile
            y: 135    // Aligned with the text height in mobile
        } : {
            x: 140,  // Original desktop position
            y: 185   // Original desktop position
        };

        return (
            <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onAnimationComplete={onAnimationComplete}
            >
                {/* Enter key rectangle */}
                <rect
                    x={position.x}
                    y={position.y}
                    width="60"
                    height="30"
                    rx="5"
                    className="fill-primary/20"
                    stroke="#0EA5E9"
                    strokeWidth="2"
                />
                {/* Enter text */}
                <text
                    x={position.x + 10}
                    y={position.y + 20}
                    className="fill-primary text-sm font-bold"
                    style={{ filter: "drop-shadow(0 0 3px #0EA5E9)" }}
                >
                    Enter
                </text>
                {/* Press animation effect */}
                <motion.rect
                    x={position.x}
                    y={position.y}
                    width="60"
                    height="30"
                    rx="5"
                    className="fill-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.2, 0] }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                />
            </motion.g>
        );
    };

    // Typing animation
    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setShowEnterKey(true);
                }, 500);
            }
        }, 150);

        return () => clearInterval(typingInterval);
    }, []);

    // Blinking cursor
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 530);

        return () => clearInterval(cursorInterval);
    }, []);

    // Handle output sequence after propagation
    useEffect(() => {
        if (showPropagation) {
            const animatePropagation = async () => {
                // Animate input-to-hidden connections
                for (let i = 0; i < inputHiddenPaths.current.length; i++) {
                    await inputHiddenControls.start(
                        {
                            stroke: "#0EA5E9", // Change to your desired color
                            pathLength: 1,
                            transition: { duration: 0.5 }
                        },
                    );
                    await new Promise(resolve => setTimeout(resolve, 0.1));
                }
                // Animate hidden-to-output connections
                for (let i = 0; i < hiddenOutputPaths.current.length; i++) {
                    await hiddenOutputControls.start(
                        {
                            stroke: "#0EA5E9",
                            pathLength: 1,
                            transition: { duration: 0.5 }
                        },
                    );
                    await new Promise(resolve => setTimeout(resolve, 0.1));
                }
                // Show output nodes after the propagation animation
                setShowOutput(true);
                setTimeout(() => {
                    setShowOutputLabels(true);
                }, 500);
            };

            animatePropagation();
        }
    }, [showPropagation]);

    const handleEnterAnimationComplete = () => {
        setTimeout(() => {
            setShowInput(false);
        }, 500);
        setTimeout(() => {
            setShowPropagation(true);
        }, 500);
    };

    const [showBlinkingCursor, setShowBlinkingCursor] = useState(false);

    useEffect(() => {
        if (showOutput) {
            setShowBlinkingCursor(true);
        }
    }, [showOutput]);

    useEffect(() => {
        let cursorInterval;
        if (showBlinkingCursor) {
            cursorInterval = setInterval(() => {
                setShowCursor((prev) => !prev);
            }, 530);
        }

        return () => clearInterval(cursorInterval);
    }, [showBlinkingCursor]);

    const nodeFloatingControls = Array.from({ length: 7 }, () => useAnimation());

    // Refs for nodes
    const nodeRefs = useRef([]);

    useEffect(() => {
        // Assign refs to nodes using IDs
        nodeRefs.current = [
            document.getElementById("node-0"),
            document.getElementById("node-1"),
            document.getElementById("node-2"),
            document.getElementById("node-3"),
            document.getElementById("node-4"),
            document.getElementById("node-5"),
            document.getElementById("node-6"),
        ];
    }, []);

    // Floating animation for each node
    useEffect(() => {
        const animateNodeFloating = async (index) => {
            if (!nodeRefs.current[index]) return; // Check if node ref exists

            await nodeFloatingControls[index].start({
                y: [0, Math.random() * 3 - 2, 0],
                x: [0, Math.random() * 3 - 2, 0],
                rotate: [0, Math.random() * 2 - 2, 0],
                transition: {
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                },
            });
        };

        // Start floating animation for each node
        nodeFloatingControls.forEach((_, i) => {
            animateNodeFloating(i);
        });
    }, []); // The empty dependency array ensures this effect runs only once

    useEffect(() => {
        const checkViewport = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };
        checkViewport();
        window.addEventListener('resize', checkViewport);
        return () => window.removeEventListener('resize', checkViewport);
    }, []);


    return (
        <div className="relative min-h-screen flex items-center justify-center">
            {isSmallScreen ? (
                <motion.svg className="w-full h-[100vh]" viewBox="0 0 600 1200">
                    {/* Input Layer Nodes */}
                    <motion.circle
                        id="node-0"
                        cx="225"
                        cy="200"
                        r="20"
                        className="fill-primary"
                        style={{ filter: "drop-shadow(0 0 10px #0EA5E9)" }}
                        animate={nodeFloatingControls[0]}
                    />
                    <motion.circle
                        id="node-1"
                        cx="375"
                        cy="200"
                        r="20"
                        className="fill-primary"
                        style={{ filter: "drop-shadow(0 0 10px #0EA5E9)" }}
                        animate={nodeFloatingControls[1]}
                    />

                    {/* Hidden Layer Nodes */}
                    <motion.circle
                        id="node-2"
                        cx="225"
                        cy="500"
                        r="20"
                        className="fill-primary"
                        style={{ filter: "drop-shadow(0 0 10px #0EA5E9)" }}
                        animate={nodeFloatingControls[2]}
                    />
                    <motion.circle
                        id="node-3"
                        cx="300"
                        cy="500"
                        r="20"
                        className="fill-primary"
                        style={{ filter: "drop-shadow(0 0 10px #0EA5E9)" }}
                        animate={nodeFloatingControls[3]}
                    />
                    <motion.circle
                        id="node-4"
                        cx="375"
                        cy="500"
                        r="20"
                        className="fill-primary"
                        style={{ filter: "drop-shadow(0 0 10px #0EA5E9)" }}
                        animate={nodeFloatingControls[4]}
                    />

                    {/* Input Text */}
                    {showInput && (
                        <>
                            <text
                                x="240"
                                y="160"
                                className="fill-primary text-2xl font-bold"
                                style={{ filter: "drop-shadow(0 0 5px #0EA5E9)" }}
                            >
                                {text}
                                <tspan className={`${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</tspan>
                            </text>
                            {showEnterKey && <EnterKey onAnimationComplete={handleEnterAnimationComplete} />}
                        </>
                    )}

                    {/* Propagation Animation (Connections) */}
                    <motion.g
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 1, stroke: "url(#lineGradient)" }}
                        animate={inputHiddenControls}
                    >
                        <motion.path
                            d="M225 220 L225 480"
                            ref={(el) => (inputHiddenPaths.current[0] = el)}
                        />
                        <motion.path
                            d="M225 220 L300 480"
                            ref={(el) => (inputHiddenPaths.current[1] = el)}
                        />
                        <motion.path
                            d="M225 220 L375 480"
                            ref={(el) => (inputHiddenPaths.current[2] = el)}
                        />
                        <motion.path
                            d="M375 220 L225 480"
                            ref={(el) => (inputHiddenPaths.current[3] = el)}
                        />
                        <motion.path
                            d="M375 220 L300 480"
                            ref={(el) => (inputHiddenPaths.current[4] = el)}
                        />
                        <motion.path
                            d="M375 220 L375 480"
                            ref={(el) => (inputHiddenPaths.current[5] = el)}
                        />
                    </motion.g>

                    {/* Hidden to Output connections */}
                    <motion.g
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 1, stroke: "url(#lineGradient)" }}
                        animate={hiddenOutputControls}
                    >
                        <motion.path
                            d="M225 520 L225 780"
                            ref={(el) => (hiddenOutputPaths.current[0] = el)}
                        />
                        <motion.path
                            d="M225 520 L375 780"
                            ref={(el) => (hiddenOutputPaths.current[1] = el)}
                        />
                        <motion.path
                            d="M300 520 L225 780"
                            ref={(el) => (hiddenOutputPaths.current[2] = el)}
                        />
                        <motion.path
                            d="M300 520 L375 780"
                            ref={(el) => (hiddenOutputPaths.current[3] = el)}
                        />
                        <motion.path
                            d="M375 520 L225 780"
                            ref={(el) => (hiddenOutputPaths.current[4] = el)}
                        />
                        <motion.path
                            d="M375 520 L375 780"
                            ref={(el) => (hiddenOutputPaths.current[5] = el)}
                        />
                    </motion.g>

                    {/* Output Nodes */}
                    <motion.circle
                        id="node-5"
                        cx="225"
                        cy="800"
                        r="20"
                        className="fill-primary"
                        style={{ filter: "drop-shadow(0 0 10px #0EA5E9)" }}
                        animate={nodeFloatingControls[5]}
                    />
                    <motion.circle
                        id="node-6"
                        cx="375"
                        cy="800"
                        r="20"
                        className="fill-primary"
                        style={{ filter: "drop-shadow(0 0 10px #0EA5E9)" }}
                        animate={nodeFloatingControls[6]}
                    />

                    {/* Output Labels with Animation */}
                    {showOutputLabels && (
                        <>
                            <motion.g
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <text
                                    x="175"
                                    y="850"
                                    className="fill-primary text-lg font-bold"
                                    style={{ filter: "drop-shadow(0 0 5px #0EA5E9)" }}
                                >
                                    Sérgio: 0.99
                                </text>
                            </motion.g>

                            <motion.g
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <text
                                    x="325"
                                    y="850"
                                    className="fill-primary text-lg font-bold"
                                    style={{ filter: "drop-shadow(0 0 5px #0EA5E9)" }}
                                >
                                    Pinto: 0.01
                                </text>
                            </motion.g>
                        </>
                    )}

                    {/* Gradient Definitions */}
                    <defs>
                        <linearGradient id="lineGradient" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#D3E4FD" stopOpacity="0.6" />
                        </linearGradient>
                    </defs>
                </motion.svg>
            ) : (
            <motion.svg className="w-full h-screen max-h-[1000px] mr-20" viewBox="0 0 800 400">
                {/* Input Layer Nodes */}
                <motion.circle
                    id="node-0"
                    cx="150"
                    cy="150"
                    r="20"
                    className="fill-primary"
                    style={{ filter: "drop-shadow(0 0 10px #0EA5E9)" }}
                    animate={nodeFloatingControls[0]}
                />
                <motion.circle
                    id="node-1"
                    cx="150"
                    cy="250"
                    r="20"
                    className="fill-primary"
                    style={{ filter: "drop-shadow(0 0 10px #0EA5E9)" }}
                    animate={nodeFloatingControls[1]}
                />

                {/* Hidden Layer Nodes */}
                <motion.circle
                    id="node-2"
                    cx="400"
                    cy="100"
                    r="20"
                    className="fill-primary"
                    style={{ filter: "drop-shadow(0 0 10px #0EA5E9)" }}
                    animate={nodeFloatingControls[2]}
                />
                <motion.circle
                    id="node-3"
                    cx="400"
                    cy="200"
                    r="20"
                    className="fill-primary"
                    style={{ filter: "drop-shadow(0 0 10px #0EA5E9)" }}
                    animate={nodeFloatingControls[3]}
                />
                <motion.circle
                    id="node-4"
                    cx="400"
                    cy="300"
                    r="20"
                    className="fill-primary"
                    style={{ filter: "drop-shadow(0 0 10px #0EA5E9)" }}
                    animate={nodeFloatingControls[4]}
                />

                {/* Input Text */}
                {showInput && (
                    <>
                        <text
                            x="40"
                            y="210"
                            className="fill-primary text-2xl font-bold"
                            style={{ filter: "drop-shadow(0 0 5px #0EA5E9)" }}
                        >
                            {text}
                            <tspan className={`${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</tspan>
                        </text>
                        {showEnterKey && <EnterKey onAnimationComplete={handleEnterAnimationComplete} />}
                    </>
                )}

                {/* Propagation Animation (Connections) */}
                {/* Input to Hidden connections */}
                <motion.g
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 1, stroke: "url(#lineGradient)" }}
                    animate={inputHiddenControls}
                >
                    <motion.path
                        d="M170 150 L380 100"
                        ref={(el) => (inputHiddenPaths.current[0] = el)}
                    />
                    <motion.path
                        d="M170 150 L380 200"
                        ref={(el) => (inputHiddenPaths.current[1] = el)}
                    />
                    <motion.path
                        d="M170 150 L380 300"
                        ref={(el) => (inputHiddenPaths.current[2] = el)}
                    />
                    <motion.path
                        d="M170 250 L380 100"
                        ref={(el) => (inputHiddenPaths.current[3] = el)}
                    />
                    <motion.path
                        d="M170 250 L380 200"
                        ref={(el) => (inputHiddenPaths.current[4] = el)}
                    />
                    <motion.path
                        d="M170 250 L380 300"
                        ref={(el) => (inputHiddenPaths.current[5] = el)}
                    />
                </motion.g>

                {/* Hidden to Output connections */}
                <motion.g
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 1, stroke: "url(#lineGradient)" }}
                    animate={hiddenOutputControls}
                >
                    <motion.path
                        d="M420 100 L645 150"
                        ref={(el) => (hiddenOutputPaths.current[0] = el)}
                    />
                    <motion.path
                        d="M420 200 L645 150"
                        ref={(el) => (hiddenOutputPaths.current[1] = el)}
                    />
                    <motion.path
                        d="M420 300 L645 150"
                        ref={(el) => (hiddenOutputPaths.current[2] = el)}
                    />
                    <motion.path
                        d="M420 100 L645 250"
                        ref={(el) => (hiddenOutputPaths.current[3] = el)}
                    />
                    <motion.path
                        d="M420 200 L645 250"
                        ref={(el) => (hiddenOutputPaths.current[4] = el)}
                    />
                    <motion.path
                        d="M420 300 L645 250"
                        ref={(el) => (hiddenOutputPaths.current[5] = el)}
                    />
                </motion.g>

                {/* Output Nodes - Always visible */}
                <motion.circle
                    id="node-5"
                    cx="665"
                    cy="150"
                    r="20"
                    className="fill-primary"
                    style={{ filter: "drop-shadow(0 0 10px #0EA5E9)" }}
                    animate={nodeFloatingControls[5]}
                />
                <motion.circle
                    id="node-6"
                    cx="665"
                    cy="250"
                    r="20"
                    className="fill-primary"
                    style={{ filter: "drop-shadow(0 0 10px #0EA5E9)" }}
                    animate={nodeFloatingControls[6]}
                />

                {/* Output Labels with Animation */}
                {showOutputLabels && (
                    <>
                        {/* Sérgio Label */}
                        <motion.g
                            initial={{ opacity: 0, x: 650, y: 150 }}
                            animate={{ opacity: 1, x: 650, y: 150 }}
                            transition={{ duration: 0.5 }}
                        >
                            <text
                                x="40"
                                y="9"
                                className="fill-primary text-lg font-bold"
                                style={{ filter: "drop-shadow(0 0 5px #0EA5E9)" }}
                            >
                                Sérgio: 0.99
                            </text>
                        </motion.g>

                        {/* Pinto Label */}
                        <motion.g
                            initial={{ opacity: 0, x: 650, y: 250 }}
                            animate={{ opacity: 1, x: 650, y: 250 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <text
                                x="40"
                                y="9"
                                className="fill-primary text-lg font-bold"
                                style={{ filter: "drop-shadow(0 0 5px #0EA5E9)" }}
                            >
                                Pinto: 0.01
                            </text>
                        </motion.g>
                    </>
                )}
            </motion.svg>
                )}
        </div>
    );
};