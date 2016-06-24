# react-simple-modal

Very simple react component that presents content via modal.

![React Modal](https://github.com/the-unsullied/react-easy-modal/blob/demo/modaldemo.gif)


## Install
```
  npm i unsullied-react-modal --save
```

## Usage
```
  import Modal from 'unsullied-react-modal';
  
  React.createClass({
    getInitialState() {
      return {
        note: '',
        showModal: false
      }
    },
    saveNote() {
      console.log(this.state.note);
      this.setState({ showModal: false });
    },
    
    render() {
      return {
        this.state.showModal ?
        
        <Modal header='Create Note'
          handleClose={goBack}>
          <textarea value={this.state.note}/>
          <button onClick={this.saveNote}>
            Save
          </button>
        </Modal> : null
      }
    }
  
  });
```
## Params

**header** {String} Header that appears above modal.

**disableClose** {Boolean} true will disable the modal from closing, false [default] will allow user to close.

**closeModal** {Number} Increment this property to trigger the modal to close.

**handleClose** {Method} callback method that is executed after close.


## Images
To get the close icon working - you will need to copy the unsullied-close.svg into your image assets directory, and reference it with this css:

```
.unsullied-icon-close {
  background-image: url('/path/to/images/assets/unsullied-close.svg');
}
```
