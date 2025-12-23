pipeline {
    agent any

    tools {
        nodejs "NodeJS-18.20.8" // Exact NodeJS name you configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/abdulrehman2557/DevOps-Project-CI-CD-pipeline-Angular.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // For Windows use 'bat'
                bat 'npm install'
            }
        }

        stage('Build Angular') {
            steps {
                bat 'ng build --prod'
            }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts 'dist/**'
            }
        }

        stage('Docker Build (Optional, Later)') {
            steps {
                echo 'Docker deployment steps will be added here later'
                // Example placeholder:
                // bat 'docker build -t angular-app:latest .'
                // bat 'docker run -d -p 80:80 angular-app:latest'
            }
        }
    }

    post {
        success {
            echo 'Build completed successfully!'
        }
        failure {
            echo 'Build failed. Check console output.'
        }
    }
}
