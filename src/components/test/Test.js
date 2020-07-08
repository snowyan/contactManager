import React, {Component} from 'react';

class Test extends Component {
    static ={
        test: 'test',
    }

    componentDidMount() {
        console.log('componentDidMount...');
    }

    componentWillMount() {
        console.log('componentWillMount...');
    }

    componentDidUpdate() {
        console.log('componentDidUpdata...');
    }

    componentWillUpdate() {
        console.log('componentWillUpdata...');
    }

    componentWillReceiveProps(nextProps, nextState) {
        console.log('componentWillReceiveProps...')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            test: 'something'
        };
    }

    getSnapshotBeforeUpdata(prevProps, prevState){
        console.log('getSnapshotBeforeUpdata...')
    }

    render() {
        return (
            <div>
                <h1>Test Component</h1>
            </div>
        );
    }
}

export default Test;