import $ from "jquery";

import "az-styles";
import "bootstrap";

import io from "socket.io-client";

// Initialize React
import { init } from "./client";

$(document).ready(function () {
	if ($("#app").length > 0) {
		init();
	}

	var socket = io.connect();

	socket.emit('chat message', 'yo whatsup');
});
