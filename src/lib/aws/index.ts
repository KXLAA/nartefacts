/* istanbul ignore file */

import aws from 'aws-sdk'

aws.config.update({
  accessKeyId: process.env.S3_UPLOAD_KEY,
  secretAccessKey: process.env.S3_UPLOAD_SECRET,
  signatureVersion: 'v4',
})

const s3 = new aws.S3()

export function uploadFile(key: string, body: Buffer | string) {
  const uploadParams = {
    Bucket: process.env.S3_UPLOAD_BUCKET!,
    Key: key,
    Body: body,
  }

  return s3.upload(uploadParams).promise()
}

export default aws

export async function getNumberOfFilesInS3Bucket(bucket: string) {
  const params = {
    Bucket: bucket,
    MaxKeys: 1000,
    Prefix: 'next-s3-uploads/',
  }
  const data = await s3.listObjects(params).promise()
  return data?.Contents?.length
}
