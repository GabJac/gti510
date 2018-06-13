import * as React from 'react';
import {ChangeEvent, Component, RefObject} from 'react';
import './Login.css';
import {connect} from "react-redux";
import {IRootState} from '../store/AppStore';

interface IState {
    username: string;
    password: string;
}

const mapStateToProps = (state: IRootState) => {
    return {
        isLogging: state.isLogging
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
    }
}

class Login extends Component<IRootState, IState> {
    private videoRef: RefObject<HTMLVideoElement>;

    public constructor(props: IRootState) {
        super(props);
        this.state = {username: '', password: ''};
        this.videoRef = React.createRef()

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    public handleUsernameChange(event: ChangeEvent) {
        const username = event.target.nodeValue;
        if(username) {
            this.setState({username});
        }
    }

    public handlePasswordChange(event: ChangeEvent) {
        const password = event.target.nodeValue;
        if(password) {
            this.setState({password});
        }
    }

    public componentDidMount() {
        if(this.videoRef.current) {
            this.videoRef.current.play();
        }
        console.log(this.props.isLogging);
    }

    public render() {
     return (
      <div className={"login"}>
          <div className={"loop"}>
          <video ref={this.videoRef} preload={"auto"} autoPlay={true} loop={true} muted={true} id={"loop"}>
              <source src="loop.mp4" type="video/mp4"/>
          </video>
          </div>
          <div className={"login_container"}>
              <form>
                  <label>
                      <input type="text" placeholder="username" value={this.state.username} onChange={this.handleUsernameChange}/>
                      <input type="text" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                  </label>
              </form>
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)