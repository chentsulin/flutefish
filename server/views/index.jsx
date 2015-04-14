var React = require('react');

module.exports = React.createClass({
  propTypes: {
    meta: React.PropTypes.object.isRequired,
    dehydratedScript: React.PropTypes.string,
    renderedApp: React.PropTypes.string
  },

  render: function() {
    var metaTags = [];

    if (this.props.ogImage) {
      metaTags.push(
        <meta property="og:image" content={this.props.ogImage} />
      )
    }

    return (
      <html lang="zh-TW">
      <head>
        <meta charSet="UTF-8" />
        <title>{this.props.meta.title}</title>
        {metaTags}
      </head>
      <body>
        <div id="react-root" dangerouslySetInnerHTML={
          {__html: this.props.renderedApp}
        }></div>
        <script dangerouslySetInnerHTML={
          {__html: this.props.dehydratedScript}
        }></script>
        <script src="/build/client.js"></script>
      </body>
      </html>
    );
  }
});