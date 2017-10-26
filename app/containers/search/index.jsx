import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Search extends React.Component {
	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	render() {
		return (
				<div>search</div>
			)
	}
}

//------------------------绑定 react-redux ----------------
function mapStateToProps(state) {
	return {
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search)