#!/bin/bash

# 👉 Parámetros
BUCKET_NAME="image-remove-frontend"
CLOUDFRONT_DISTRIBUTION_ID="E2SJ09TIM1AASM"

# 👉 Build del proyecto
echo "🛠 Ejecutando build..."
bun run build

# 👉 Sincronizar carpeta dist/ con S3
echo "📤 Subiendo a S3..."
aws s3 sync dist/ s3://$BUCKET_NAME --delete

# 👉 Invalidar caché de CloudFront
echo "🔄 Invalidando CloudFront..."
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"

echo "✅ Despliegue completo."
