import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_links'>
        <a href='https://github.com/nwabuezenonso'><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_97_21)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.705 0.565308C4.79386 0.565308 0 5.35852 0 11.2716C0 16.0011 3.06731 20.0141 7.32156 21.4304C7.8572 21.5284 8.05241 21.1978 8.05241 20.9139C8.05241 20.6595 8.04309 19.9865 8.0375 19.0933C5.05958 19.74 4.43128 17.658 4.43128 17.658C3.94427 16.421 3.24234 16.0918 3.24234 16.0918C2.27029 15.428 3.31593 15.4411 3.31593 15.4411C4.3905 15.5167 4.95572 16.5446 4.95572 16.5446C5.91068 18.1804 7.46174 17.7079 8.07165 17.4338C8.1689 16.7424 8.44561 16.2705 8.75122 16.003C6.37403 15.7323 3.87457 14.8141 3.87457 10.7117C3.87457 9.54245 4.29193 8.58749 4.97675 7.83891C4.86627 7.56812 4.49894 6.47972 5.08201 5.00555C5.08201 5.00555 5.98043 4.71771 8.02575 6.10251C8.87949 5.86523 9.79567 5.74693 10.7059 5.74233C11.6155 5.74606 12.5311 5.86529 13.3861 6.10251C15.4301 4.71771 16.3272 5.00555 16.3272 5.00555C16.9115 6.47972 16.5441 7.56812 16.4343 7.83891C17.1205 8.58749 17.5345 9.54245 17.5345 10.7117C17.5345 14.8246 15.0312 15.7296 12.6467 15.9944C13.0305 16.325 13.373 16.9784 13.373 17.9774C13.373 19.4081 13.3599 20.5629 13.3599 20.9139C13.3599 21.2004 13.5531 21.5336 14.096 21.4291C18.347 20.0102 21.4117 16.0004 21.4117 11.2716C21.4117 5.35852 16.6178 0.565308 10.7047 0.565308" fill="#737374"/></g><defs><clipPath id="clip0_97_21"><rect width="21.4117" height="21.4117" fill="white" transform="translate(0 0.301605)"/></clipPath></defs></svg></a>
        <a href='https://www.linkedin.com/in/chukwunonso-nwabueze/'><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_97_30)"><path d="M5.24424 21.4114V6.96501H0.51026V21.4114H5.24424ZM2.87786 4.99141C4.52868 4.99141 5.55624 3.8821 5.55624 2.49582C5.52549 1.07828 4.52875 -0.000244141 2.90919 -0.000244141C1.28988 -0.000244141 0.230957 1.0783 0.230957 2.49582C0.230957 3.88216 1.25826 4.99141 2.84696 4.99141H2.87771H2.87786ZM7.86448 21.4114H12.5985V13.3438C12.5985 12.9121 12.6292 12.4808 12.7542 12.1721C13.0965 11.3095 13.8754 10.416 15.1831 10.416C16.8962 10.416 17.5815 11.7408 17.5815 13.6828V21.4113H22.3151V13.1279C22.3151 8.69051 19.9796 6.62585 16.865 6.62585C14.3112 6.62585 13.1899 8.07375 12.567 9.05991H12.5986V6.96471H7.86459C7.92672 8.32028 7.86459 21.4111 7.86459 21.4111L7.86448 21.4114Z" fill="#737374"/></g><defs><clipPath id="clip0_97_30"><rect width="22.0808" height="21.4117" fill="white" transform="translate(0.230957)"/></clipPath></defs></svg></a>
        <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_97_24)"><path d="M26.407 2.53318C25.4509 2.9632 24.4239 3.25391 23.3441 3.38457C24.4461 2.71575 25.2904 1.6559 25.689 0.394512C24.6422 1.02467 23.4965 1.4683 22.3018 1.70613C21.3295 0.655776 19.9431 0 18.4092 0C15.465 0 13.0772 2.41905 13.0772 5.40478C13.0772 5.82783 13.1242 6.24055 13.2146 6.6368C8.7825 6.41105 4.85316 4.25934 2.22304 0.989804C1.76378 1.78832 1.50091 2.71673 1.50091 3.7073C1.50091 5.58219 2.44248 7.23642 3.87318 8.20544C3.02623 8.17884 2.19786 7.94714 1.45734 7.52971V7.59801C1.45734 10.2169 3.29525 12.4007 5.73498 12.8973C5.2868 13.0218 4.81647 13.0868 4.32989 13.0868C3.98586 13.0868 3.65208 13.0538 3.32602 12.9916C4.00465 15.1382 5.9741 16.7007 8.307 16.7448C6.48189 18.1949 4.18217 19.0592 1.68442 19.0592C1.25421 19.0592 0.829026 19.0332 0.411621 18.9822C2.77198 20.5162 5.57453 21.4117 8.58619 21.4117C18.3947 21.4117 23.759 13.1759 23.759 6.03384C23.759 5.79936 23.7539 5.56663 23.7427 5.33474C24.7879 4.56857 25.6901 3.61991 26.407 2.53318Z" fill="#737374"/></g><defs><clipPath id="clip0_97_24"><rect width="26.4077" height="21.4117" fill="white" transform="translate(0.411621)"/></clipPath></defs></svg>
        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.819336 0V21.4117H22.231V0H0.819336ZM18.6082 5.07093L17.4612 6.17019C17.3608 6.24666 17.313 6.37092 17.3321 6.49041V14.5819C17.313 14.7062 17.3608 14.8304 17.4612 14.9021L18.5843 16.0014V16.2451H12.9446V16.0109L14.106 14.883C14.2207 14.7683 14.2207 14.7348 14.2207 14.5628V8.01981L10.9899 16.2212H10.5549L6.79357 8.01981V13.5161C6.76011 13.7455 6.84136 13.9797 7.00386 14.147L8.51415 15.9775V16.2212H4.22226V15.9775L5.73255 14.147C5.89504 13.9797 5.96674 13.7455 5.9285 13.5161V7.15952C5.94762 6.98268 5.88071 6.81063 5.74688 6.69114L4.40388 5.07093V4.82718H8.57628L11.7976 11.9007L14.6318 4.83196H18.6082V5.07093Z" fill="#737374"/></svg>   
      </div>
    </div>
  )
}

export default Footer