let slideshow = {
    photoList: ['mountainPic', 'oceanPic', 'desertPic', 'forrestPic'],
    currentPhotoIndex: 0,
    nextPhoto: function() { 
            if (this.currentPhotoIndex < this.photoList.length) {
                this.currentPhotoIndex ++;
                console.log(this.currentPhotoIndex);
                console.log(this.photoList);
            }
    }
}
slideshow.nextPhoto()
console.log(slideshow);
