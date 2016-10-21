import React, { Component, PropTypes } from 'react'
import { pdfToURL }from 'download/pdf'
import dumbData, { parent, child, brother} from 'constants/dumbData'
import { HOST } from 'constants/default'
import './PDF.less'


class PDF extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      src: ''
    }
  }
  componentDidMount() {
    const form = this.props.params.form || 'i-130'
    const loadPdf = (form, data) => {
      fetch(`${HOST}/${form}`,  {
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(res => res.blob())
      .then(blob => this.setState({ src: URL.createObjectURL(blob) }))
    }
    loadPdf(form, dumbData.data)
    //pdfToURL(forms[form], this.props.data).then(blobURL => this.setState({ src: blobURL }))
  }

  render() {
    return <iframe className='pdf' src={this.state.src} />
  }
}
PDF.propTypes = {
 data: PropTypes.object
}
PDF.defaultProps = {
  datad: {}
}

export default PDF
