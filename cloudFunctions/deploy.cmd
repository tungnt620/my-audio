gcloud functions deploy convertTextToAudio \
--region asia-east2 \
--memory 256MB \
--timeout 540s \
--runtime nodejs8 \
--env-vars-file .env.yaml \
--trigger-http
