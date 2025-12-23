pipeline {
    agent any

    tools {
        nodejs "NodeJS-18.20.8"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/abdulrehman2557/DevOps-Project-CI-CD-pipeline-Angular.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                bat 'npm install'
            }
        }

        stage('Build Angular App') {
            steps {
                echo 'Building Angular project...'
                bat 'ng build --configuration production'
            }
        }

        stage('Archive Build') {
            steps {
                echo 'Archiving dist folder...'
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }

        stage('Docker Build & Run') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t my-angular-app:latest .'

                echo 'Stopping & removing old container if exists...'
                bat 'cmd /c "docker stop angular-container 2>nul & docker rm angular-container 2>nul & exit 0"'

                echo 'Running new Docker container...'
                bat 'docker run -d -p 4200:80 --name angular-container my-angular-app:latest'
            }
        }
    }

    post {
        success {
            echo '✅ CI/CD Pipeline executed successfully'
            echo '🌐 Open: http://localhost:4200'
        }

        failure {
            echo '❌ CI/CD Pipeline failed'
        }
    }
}
