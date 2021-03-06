import React from 'react';
import classnames from 'classnames';

export default React.createClass({
  getDefaultProps: function() {
     return {
       header: '',
       disableClose: false,
       closeModal: 0,
       handleClose: () => {}
     };
   },

  propTypes: {
    header: React.PropTypes.string,
    disableClose: React.PropTypes.bool,
    closeModal: React.PropTypes.number,
    handleClose: React.PropTypes.func
  },

  getInitialState() {
    return {
      isShowing: false
    }
  },

  componentWillMount() {
    document.querySelector('html').style.overflow = 'hidden';
  },

  componentDidMount() {
    //for css animation, move to bottom of call stack
    setTimeout(() => {
      this.setState({ isShowing: true });
    }, 0);
  },

  componentWillUnmount() {
    document.querySelector('html').style.overflow = 'auto';
  },

  componentWillUpdate(nextProps) {
    if(nextProps.closeModal === this.props.closeModal + 1) {
      this.performClose();
    }
  },

  close(e) {
    e.stopPropagation();
    const { classList } = e.target;
    const shouldClose = classList.contains('unsullied-modal') || classList.contains('unsullied-modal__close');
    if(shouldClose && !this.props.disableClose) {
      this.performClose();
    }
  },

  performClose() {
    this.setState({isShowing: false});
    setTimeout(() => {
      if(typeof this.props.handleClose === 'function') {
        this.props.handleClose();
      }
    }, 300);
  },

  render() {
    return <div className={classnames('unsullied-modal', {'unsullied-modal--showing': this.state.isShowing})} onClick={this.close}>
      <div className="unsullied-modal__content">
        <div className="unsullied-modal__header">
          {!this.props.disableClose ? <div className="modal__close">
            <i className="unsullied-modal__close unsullied-icon-close" onClick={this.close}></i>
          </div> : null}
          <h3>{this.props.header}</h3>
        </div>
        {this.props.children}
      </div>
    </div>
  }
});
