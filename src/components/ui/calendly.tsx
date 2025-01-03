import { PopupButton } from "react-calendly";
import { motion } from "framer-motion";

export const CalendlyButton = () => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{
                scale: 1.2,
                transition: { type: "spring", stiffness: 300 }
            }}
            className="fixed bottom-6 right-6 z-50"
        >
            <div className="relative">
                {/* Gradient background with glow effect */}
                <div
                    className="absolute inset-0 bg-primary rounded-full drop-shadow-[0_0_10px_#0EA5E9]"
                />

                {/* PopupButton with targeted styling */}
                <PopupButton
                    url="https://calendly.com/sergiomgpinto/virtual-coffe"
                    rootElement={document.getElementById("root")}
                    text="Let's Talk"
                    className="relative fill-primary text-white px-4 py-2 rounded-full font-medium calendly-button"
                />
            </div>
        </motion.div>
    );
};