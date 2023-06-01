pipeline {
    agent any
    checkout scm
    environment {
        CC = 'Global'
    }
    stages {
        environment {
            DEBUG = 'true'
        }
        stage('Example') {
            steps {
                echo "Running ${env.BUILD_ID} on ${env.BUILD_NUMBER}"

                echo "Running ${env.BUILD_TAG} on ${env.JENKINS_URL}"
                echo "Running ${env.BUILD_ID} on ${env.BUILD_URL}"
                echo "Running ${env.EXECUTOR_NUMBER} on ${env.JENKINS_URL}"
                echo "Running ${env.JOB_NAME} on ${env.NODE_NAME}"
                echo "Running ${env.WORKSPACE} on ${env.JENKINS_URL}"
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
            }
        }
        stage('Check Node') {
            steps {
                sh 'node --version'
            }
        }
        stage('Install'){
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build'){
            sh 'npm build'
        }
    }
}