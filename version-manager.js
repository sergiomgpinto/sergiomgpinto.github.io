import fs from 'fs'

function updateVersion(type = 'patch') {
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'))

    let [major, minor, patch] = packageJson.version.split('.').map(Number)

    switch (type.toLowerCase()) {
        case 'major':
            major += 1
            minor = 0
            patch = 0
            break
        case 'minor':
            minor += 1
            patch = 0
            break
        case 'patch':
            patch += 1
            break
        default:
            console.error('Invalid version type. Use: major, minor, or patch')
            process.exit(1)
    }

    const newVersion = `${major}.${minor}.${patch}`

    packageJson.version = newVersion

    fs.writeFileSync(
        './package.json',
        JSON.stringify(packageJson, null, 2) + '\n'
    )

    console.log(`Version updated to ${newVersion}`)
    return newVersion
}

if (process.argv[2]) {
    updateVersion(process.argv[2])
}

export { updateVersion }