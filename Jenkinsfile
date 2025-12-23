pipeline {
    agent any

    tools {
        nodejs "NodeJS-18.20.8" // Must match your Jenkins NodeJS name
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
                bat 'npm install'        // Install project dependencies
            }
        }

        stage('Build Angular') {
            steps {
                bat 'ng build --prod'    // Build Angular using global Angular CLI
            }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts 'dist/**'   // Save build artifacts
            }
        }

        stage('Docker Build (Optional)') {
            steps {
                echo 'Docker deployment steps will be added later'
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
