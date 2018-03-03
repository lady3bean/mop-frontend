import React from 'react'
import PropTypes from 'prop-types'
import { actions as petitionActions } from '../actions/petitionActions'

class Facebook extends React.Component {
  constructor(props) {
    super(props)
    this.openFacebookSharing = this.openFacebookSharing.bind(this)
    this.shareFacebook = this.shareFacebook.bind(this)
  }

  openFacebookSharing(urlToShare) {
    const { user, pre, trackingParams } = this.props
    const preChar = /\?/.test(urlToShare) ? '&' : '?'
    let fbUrl = `${urlToShare}${preChar}source=${pre}.fb`
    if (user.signonId) {
      fbUrl = `${fbUrl}&${trackingParams}`
    }
    window.open(
      `https://www.facebook.com/share.php?u=${encodeURIComponent(fbUrl)}`
    )
    this.setState({ sharedSocially: true })
  }

  shareFacebook() {
    const { petition } = this.props
    const shareOpts =
      (petition.share_options && petition.share_options[0]) || {}
    setTimeout(() => {
      this.props.recordShare('facebook', `${this.props.pre}.fb`)
    }, 100)
    let fbUrl = petition._links.url
    if (shareOpts.facebook_share && shareOpts.facebook_share.share_url) {
      if (shareOpts.facebook_share.sharebandit) {
        // Non-OSDI feature
        petitionActions
          .getSharebanditShareLink(shareOpts.facebook_share.share_url)
          .then(this.openFacebookSharing)
        // Prematurely exit, since we will block on the promise
        return false
      }
      fbUrl = shareOpts.facebook_share.share_url
    }
    this.openFacebookSharing(fbUrl)
    return false
  }

  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, {
          shareFacebook: this.shareFacebook
        })}
      </div>
    )
  }
}

Facebook.propTypes = {
  user: PropTypes.object,
  trackingParams: PropTypes.string,
  petition: PropTypes.object,
  pre: PropTypes.string,
  recordShare: PropTypes.func,
  render: PropTypes.func,
  children: PropTypes.element
}

export default Facebook