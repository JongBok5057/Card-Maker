class ImageUploader {
    async upload(file) {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'zvdu0osu');
        const result = await fetch(
            "https://api.cloudinary.com/v1_1/dzoy1wa4m/image/upload",
            {
                method: 'POST',
                body: data,
            }
        );
        return await result.json();
    }
}

export default ImageUploader;