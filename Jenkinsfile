pipeline {
    agent any
    tools {
        nodejs 'Node-22.6'
        gradle 'gradle-8.10' // Replace 'gradle' with the exact name if different
    }
    stages {
        stage("Run Frontend") {
            steps {
                echo 'Executing yarn...'
                bat 'yarn install'
            }
        }
        stage("Run Backend") {
            steps {
                echo 'Executing Gradle...'
                bat 'gradlew.bat -v'
            }
        }
    }
}

// pipeline {
//     agent any
//     tools {
//         nodejs 'Node-22.6'
//         gradle 'gradle-8.10' // Replace 'gradle' with the exact name if different
//     }
//     environment {
//         VERCEL_TOKEN = credentials('Rahi12345') // Store your Vercel token in Jenkins credentials
//     }
//     stages {
//         stage("Install Vercel CLI") {
//             steps {
//                 echo 'Installing Vercel CLI...'
//                 sh 'npm install -g vercel' // Use `sh` for Unix/Linux, `bat` for Windows
//             }
//         }
//         stage("Run Frontend") {
//             steps {
//                 echo 'Executing yarn...'
//                 sh 'yarn install' // Use `sh` for Unix/Linux, `bat` for Windows
//             }
//         }
//         stage("Run Backend") {
//             steps {
//                 echo 'Executing Gradle...'
//                 sh './gradlew -v' // Use `sh './gradlew -v'` for Unix/Linux, `bat 'gradlew.bat -v'` for Windows
//             }
//         }
//         stage("Deploy to Vercel") {
//             steps {
//                 echo 'Deploying to Vercel...'
//                 sh 'vercel --prod --token $VERCEL_TOKEN' // Use `sh` for Unix/Linux, `bat` for Windows
//             }
//         }
//     }
// }
