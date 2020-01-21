import React from 'react';
import axios from 'axios';

// const db = "database placehlder"

class ImageUpload extends React.Component {

  constructor(props){
     super(props);
     this.state = {}
   }



  showWidget = () => {
    const url = 'http://localhost:8000/';

    let widget = window.cloudinary.createUploadWidget({
       cloudName: `luisan`,
       uploadPreset: `jufwcv6o`},
        (error, result) => {
            if (!error && result && result.event === "success") {
                console.log(result.info.url);
                const data = {
                    peg: this.props.peg,
                    imageURL: result.info.url,
                    pegName: this.props.pegName
                }
                axios
                    .put(url+'updateData', data)
                    .then(res => {
                      console.log('this is in fact running');
                      this.props.update()
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    );
    widget.open()
  }
  render() {
    return (<div>
            <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>
           <button onPointerDown={this.showWidget}> Upload Image </button>
           </div>
    );
  }
}
export default ImageUpload;