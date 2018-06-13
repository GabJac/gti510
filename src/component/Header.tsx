import * as React from 'react';
import {Component} from 'react';
import './Header.css';

interface IProps{
    s?:string
}

class Header extends Component<IProps> {
    public constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <div className="Header">
                A Header
            </div>
        );
    }
}
export default Header;