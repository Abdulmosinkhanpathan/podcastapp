import React, { useState } from 'react';
import AWS from 'aws-sdk';
import './uv.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast ,ToastContainer} from 'react-toastify';
AWS.config.update({
  accessKeyId: '',//we get these by creating an IAM role
  secretAccessKey: '',
  region: 'us-east-1'//choose the created resource region
});

const s3 = new AWS.S3();

const UploadVideo = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const notify=()=>{
    toast.success("file upload success!",{
      position:"top-right",
      autoClose:5000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:true,
      draggable:true,
      progress:undefined
    });
  }
  
  const notifyerror=()=>{
    toast.error("file upload Error!",{
      position:"top-right",
      autoClose:5000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:true,
      draggable:true,
      progress:undefined
    });
  }

  const handleUpload = () => {
    if (selectedFile) {
      const params = {
        Bucket: 'videostream31280',//our s3 bucket name
        Key: selectedFile.name,
        Body: selectedFile,
        ACL: 'public-read' // Set ACL to public-read if you want the uploaded file to be publicly accessible
      };

      s3.upload(params, (err, data) => {
        if (err) {
          console.error('Error uploading file:', err);
          notifyerror();
        } else {
          console.log('File uploaded successfully:', data.Location);
          notify();
          // You can perform additional actions after successful upload
        }
      });
    }
  };

  return (
    <div className='uploader'>
      <input type="file" onChange={handleFileChange} className='inp'/>
      <button onClick={handleUpload} className='btn'>Upload</button>
      <ToastContainer/>
    </div>
  );
};

export default UploadVideo;
