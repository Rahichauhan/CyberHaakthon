// pipeline {
//     agent any
//     tools {
//         nodejs 'Node-22.6'
//         gradle 'gradle-8.10' // Replace 'gradle' with the exact name if different
//     }
//     stages {
//         stage("Run Frontend") {
//             steps {
//                 echo 'Executing yarn...'
//                 bat 'yarn install'
//             }
//         }
//         stage("Run Backend") {
//             steps {
//                 echo 'Executing Gradle...'
//                 bat 'gradlew.bat -v'
//             }
//         }
//     }
// }

pipeline {
    agent any
    tools {
        nodejs 'Node-22.6'
        gradle 'gradle-8.10' // Replace 'gradle' with the exact name if different
    }
    stages {
        stage("Install Vercel CLI") {
            steps {
                echo 'Installing Vercel CLI...'
                bat 'npm install -g vercel'
            }
        }
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
        stage("Deploy to Vercel") {
            steps {
                echo 'Deploying to Vercel...'
                bat 'vercel --prod'
            }
        }
    }
}

