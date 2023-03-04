/* istanbul ignore file */

import S3 from "aws-sdk/clients/s3";

const s3 = new S3({
  apiVersion: "2006-03-01",
  accessKeyId: process.env.S3_UPLOAD_KEY,
  secretAccessKey: process.env.S3_UPLOAD_SECRET,
  region: process.env.S3_UPLOAD_REGION,
  signatureVersion: "v4",
});

export function uploadFile(key: string, body: Buffer | string) {
  const uploadParams = {
    Bucket: process.env.S3_UPLOAD_BUCKET!,
    Key: key,
    Body: body,
  };

  return s3.upload(uploadParams).promise();
}

export async function getNumberOfFilesInS3Bucket(bucket: string) {
  const params = {
    Bucket: bucket,
    MaxKeys: 1000,
    Prefix: "next-s3-uploads/",
  };
  const data = await s3.listObjects(params).promise();
  return data?.Contents?.length;
}
