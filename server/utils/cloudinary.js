import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
    secure:true
  });

const uploadAvatar = async (tempFilePath) =>{
  const cloudinaryResult  = await cloudinary.uploader.upload(tempFilePath,{folder: "inchat_avatars"}, function (err, res){
    if(!err){
        // console.log(res)
    }else{
        console.log(err);
    }
  })
  return cloudinaryResult.secure_url;
}

function getImagePublicId(url) {
  const parts = url.split('/');
  const fileNameWithExtension = parts.pop(); // Get the last part of the URL which contains the file name with extension
  const fileNameWithoutExtension = fileNameWithExtension.split('.')[0]; // Remove the file extension
  const folder = parts.pop(); // Get the second last part of the URL which contains the folder name
  return `${folder}/${fileNameWithoutExtension}`;
}

const deleteAvatar =  async (imageUrl) =>{
  try {
    console.log(imageUrl);
    // Extract public ID from the image URL
    const publicId = getImagePublicId(imageUrl);
    // Delete the image using the public ID
    const deletionResult = await cloudinary.api.delete_resources(
      [publicId],
      { type: 'upload', resource_type: 'image' }
    );
    // console.log('Deletion result:', deletionResult);
    return deletionResult
  } catch (error) {
    console.error('Error deleting image:', error);
  }
}
export {cloudinary,uploadAvatar,deleteAvatar}