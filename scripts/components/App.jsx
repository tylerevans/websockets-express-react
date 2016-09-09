import { Component } from "react";

import Sample from "az-scripts/components/Sample";

import io from "socket.io-client";

class Home extends Component {
	render() {
		return (
			<div>
				<p>We are using React.</p>
				<Sample name="Tyler Evans"/>
				<a onClick={::this._message}>Click</a>
			</div>
			);
	}

	_message() {
		console.log("here");

		var socket = io.connect();
		socket.emit('chat message', 'yo whatsup');
	}
}

export default Home;
