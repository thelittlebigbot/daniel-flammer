import React from 'react';
import { Link } from 'react-router-dom';

export const MapLogo: React.FC = () => {
  return (
    <Link to='/'>
      <path
        d='M34.0001 84.6975C37.7211 61.1119 41.9499 9.8058 134.539 6.99277C131.746 5.55921 130.84 5.23096 136.193 6.94793C135.638 6.96117 135.087 6.97612 134.539 6.99277C137.847 8.69059 143.803 11.9388 145.142 15.1759L185.823 121.489C187.258 125.784 188.317 135.265 181.071 138.825C176.614 143.004 158.053 145.125 149 128.697L39.9145 172.15C30.0047 170.381 9.312 160.362 5.81943 134.441C2.51772 121.114 1.57873 96.8229 34.0001 84.6975Z'
        fill='#2042AD'
      />
      <path
        d='M0.371481 124.109C0.465769 127.137 0.744224 130.239 0.961888 130.942C1.6159 132.865 2.47635 137.558 2.46692 139.293C2.4625 140.105 2.71547 141.103 3.00858 141.51C3.30189 141.881 3.55666 142.547 3.55445 142.953C3.55205 143.396 3.7338 143.914 3.9908 144.174C4.2478 144.433 4.32062 144.618 4.17296 144.618C4.0253 144.617 4.24359 145.209 4.64582 145.912C5.04786 146.653 5.37607 147.393 5.37507 147.577C5.37387 147.799 5.95685 149.205 6.6498 150.759C7.34293 152.276 7.92591 153.682 7.92511 153.83C7.92431 153.977 8.72879 155.385 9.75396 156.941C10.7422 158.496 11.5836 159.904 11.5826 160.088C11.5802 160.531 15.6754 167.752 16.007 167.865C16.1912 167.939 16.3376 168.162 16.3366 168.346C16.3342 168.789 18.9417 171.277 19.4215 171.279C19.6061 171.28 20.3053 171.69 20.93 172.21C22.8784 173.698 25.8265 174.636 29.8481 175.027C33.1317 175.378 34.1285 175.346 37.602 174.701C41.7777 173.911 43.5887 173.515 46.0295 172.716C48.0633 172.063 49.6528 171.665 50.0216 171.741C50.3165 171.816 52.9797 170.834 55.6439 169.667C56.4581 169.303 57.7898 168.793 58.6031 168.576C61.1915 167.778 64.8193 165.915 67.3021 164.157C68.6363 163.204 70.0442 162.252 70.4515 162.033C71.5988 161.485 79.8083 158.835 82.0998 158.331C83.2086 158.078 84.4661 157.642 84.8734 157.423C85.2808 157.167 86.0948 156.839 86.6491 156.731C87.2405 156.587 89.9047 155.42 92.6434 154.143C95.3453 152.829 97.6767 151.771 97.8613 151.772C98.0089 151.773 98.4162 151.553 98.7131 151.26C99.455 150.599 104.782 148.598 106.518 148.275C107.22 148.168 108.144 147.952 108.551 147.769C110.105 147.15 112.657 146.241 113.175 146.133C113.766 145.989 117.948 144.055 119.466 143.214C119.985 142.922 120.761 142.667 121.167 142.67C121.61 142.672 122.35 142.381 122.832 142.014C123.314 141.648 124.055 141.209 124.461 141.063C126.496 140.336 133.6 137.348 135.376 136.471C136.487 135.924 138.04 135.378 138.779 135.235C139.555 135.091 140.184 134.873 140.185 134.726C140.186 134.578 141.185 134.14 142.405 133.815C143.625 133.452 144.698 133.015 144.809 132.831C144.921 132.647 145.254 132.575 145.512 132.687C145.806 132.8 146.139 132.728 146.251 132.507C146.4 132.286 146.695 132.214 146.99 132.326C147.248 132.438 147.876 132.331 148.394 132.149C149.356 131.785 150.902 132.458 150.898 133.27C150.897 133.492 152.108 134.864 153.539 136.349C155.595 138.427 156.956 139.394 159.349 140.552C162.699 142.194 163.658 142.421 168.565 142.89C172.402 143.244 176.354 142.896 177.576 142.09C178.095 141.761 178.761 141.506 179.093 141.508C179.388 141.51 179.648 141.326 179.649 141.068C179.65 140.847 179.762 140.736 179.872 140.885C180.276 141.256 184.201 139.099 185.463 137.777C189.064 134.069 190.087 122.409 187.273 117.078C186.945 116.449 186.616 115.819 186.616 115.708C186.58 115.598 186.471 115.265 186.325 114.969C185.743 113.452 185.094 110.495 184.776 107.909C184.705 107.355 184.306 106.061 183.906 104.988C183.506 103.953 183.001 101.809 182.787 100.257C182.574 98.7425 182.032 96.7092 181.557 95.7838C180.352 93.3777 179.696 91.7499 179.042 89.7529C178.715 88.7914 178.315 87.6817 178.133 87.3485C177.146 85.4974 175.872 82.0943 175.185 79.5434C174.75 77.9906 174.279 76.3638 174.097 75.9567C173.951 75.5499 173.442 74.1443 172.97 72.8128C172.534 71.4815 172.061 70.2238 171.914 70.0385C171.768 69.8162 171.368 68.7066 171.005 67.5602C170.497 65.9332 170.168 65.3777 169.357 65.041C167.847 64.4053 167.298 63.6271 166.793 61.3356C166.541 60.2268 165.996 58.6734 165.631 57.9331C165.229 57.1557 164.864 56.3416 164.829 56.083C164.756 55.8242 164.538 55.1955 164.356 54.6776C164.138 54.1597 163.848 53.1614 163.704 52.4592C163.56 51.757 163.197 50.6845 162.905 50.0923C162.174 48.6856 160.647 44.432 158.431 37.7014C157.451 34.7798 156.323 31.6728 155.922 30.8216C155.521 29.9335 155.084 28.676 154.977 27.974C154.87 27.309 154.615 26.68 154.468 26.5685C154.284 26.4567 154.029 25.8278 153.885 25.1625C153.741 24.4973 153.414 23.4988 153.122 22.9435C152.83 22.3882 152.613 21.5749 152.615 21.095C152.618 20.652 152.472 20.2821 152.288 20.2811C151.918 20.2791 151.481 19.1692 150.431 15.472C149.67 12.81 147.003 7.70124 146.413 7.69803C146.228 7.69702 145.235 6.95333 144.207 6.06177C143.141 5.1331 141.449 4.12719 140.417 3.78935C139.348 3.4513 138.317 3.00272 138.133 2.85406C137.913 2.66829 136.733 2.40347 135.552 2.2863C134.335 2.16894 132.823 1.90231 132.233 1.71453C130.611 1.22582 119.869 1.27815 115.621 1.80878C112.518 2.16105 105.57 3.67371 103.609 4.40134C103.313 4.51048 102.87 4.65573 102.685 4.69164C97.9537 5.77337 84.048 10.4967 79.7921 12.467C78.9778 12.8686 77.5716 13.4885 76.6839 13.8159C75.8328 14.1805 75.1293 14.5827 75.1285 14.7303C75.1277 14.878 74.8314 15.061 74.4614 15.2066C74.1286 15.3155 73.3141 15.7541 72.7214 16.12C72.0917 16.5227 71.0918 17.1079 70.4255 17.4365C69.7593 17.7651 69.0551 18.2781 68.7951 18.572C68.572 18.8661 68.2017 19.0856 67.9802 19.0844C67.7956 19.0834 67.3511 19.3763 67.017 19.7067C65.7174 21.1024 61.0821 24.9533 60.713 24.9513C60.4915 24.9501 60.3055 25.2074 60.3039 25.5028C60.3023 25.7981 60.0794 26.0553 59.821 26.0538C59.5995 26.0526 57.8565 27.5198 56.0381 29.2818C54.1828 31.0436 51.9571 33.0249 51.0309 33.6475C49.3264 34.8195 48.1764 35.8468 44.7978 39.4092C43.6842 40.5475 42.6456 41.4648 42.461 41.4638C42.2764 41.4628 42.128 41.6096 42.1272 41.7573C42.1264 41.9049 41.3831 42.8238 40.455 43.7785C39.5271 44.6963 38.5232 46.0198 38.1874 46.6825C37.8885 47.3453 37.5149 48.1554 37.2918 48.4495C37.1056 48.7438 36.2486 50.2158 35.3915 51.6877C34.5345 53.1596 33.6413 54.4837 33.419 54.6302C33.1227 54.8131 31.5126 59.0127 31.1348 60.598C31.0973 60.7085 30.9452 61.5198 30.7556 62.4417C30.566 63.3635 30.4139 64.1748 30.3764 64.2854C29.6945 67.4933 29.3047 71.2934 29.2048 76.0918C29.1462 80.0783 28.7277 82.3647 28.1 82.3982C27.0291 82.4663 26.2894 82.7206 25.1781 83.416C24.5484 83.8186 23.4376 84.4401 22.7715 84.7318C22.1053 85.0604 21.4751 85.5369 21.3258 85.8314C21.2135 86.1261 20.9168 86.3829 20.6584 86.3815C20.3631 86.3799 19.9187 86.6359 19.5849 86.9294C19.2878 87.26 18.2867 88.0667 17.36 88.7631C16.4333 89.4594 14.8384 90.8535 13.7992 91.8815C12.7233 92.8723 11.7589 93.7161 11.6112 93.7153C11.4636 93.7145 10.8693 94.3758 10.2372 95.2214C9.64216 96.0303 8.67578 97.2432 8.11866 97.8677C7.52442 98.529 6.89227 99.3746 6.70549 99.7796C6.51871 100.185 5.95959 101.178 5.43837 101.988C4.95409 102.797 4.35764 103.864 4.17026 104.38C3.94596 104.896 3.60992 105.595 3.38663 105.926C3.20006 106.295 2.67383 108.027 2.25794 109.833C1.84206 111.64 1.31463 113.593 1.08992 114.183C0.341817 115.988 0.181515 118.312 0.371481 124.109ZM9.75285 116.408C9.86701 115.781 10.0943 114.712 10.2458 114.011C10.3603 113.31 10.5116 112.647 10.5491 112.536C10.5866 112.426 10.7379 111.762 10.8894 111.061C11.0778 110.361 11.3035 109.587 11.4152 109.403C11.5641 109.182 11.7141 108.74 11.7532 108.334C11.868 107.597 12.5034 106.161 14.071 102.994C15.7508 99.5704 23.6161 92.3409 28.503 89.7465C29.1323 89.4177 30.3513 89.2767 31.9015 89.322C33.7101 89.3688 34.7075 89.2265 35.7441 88.6784C38.3723 87.3638 38.3721 87.4007 38.4662 76.8804C38.5555 67.2461 38.7485 65.6967 40.3217 61.497C40.6215 60.6865 40.9597 59.5809 41.0731 59.1016C41.2631 58.1059 43.5387 53.7254 45.6986 50.2671C47.1882 47.8758 53.0543 41.7059 55.9456 39.5068C57.3913 38.4072 60.544 35.6557 62.6963 33.6001C66.0358 30.4436 72.8966 24.6483 73.3026 24.6506C73.4872 24.6516 73.5253 24.4303 73.379 24.1711C73.2326 23.9488 73.2332 23.838 73.3801 23.9865C73.5271 24.0981 75.2304 23.1475 77.194 21.8293C79.1208 20.5108 81.7128 19.0483 82.9707 18.5383C84.2285 18.0283 86.0783 17.3001 87.1141 16.8997C88.1129 16.499 90.5537 15.7002 92.4764 15.12C94.3991 14.5398 97.2465 13.6324 98.7628 13.1239C102.905 11.7436 111.666 9.53941 115.767 8.86033C119.24 8.28859 131.018 7.98347 132.898 8.43667C134.409 8.81404 135.368 8.96691 136.512 9.08388C136.881 9.08589 138.131 10.0894 139.306 11.2771C141.618 13.6153 142.239 14.9107 144.124 21.3441C144.739 23.4886 145.466 25.7074 145.721 26.3363C145.976 26.9284 146.811 29.4431 147.536 31.8835C148.298 34.324 149.206 37.0607 149.57 37.9855C149.934 38.9104 150.479 40.6483 150.841 41.8685C151.167 43.0885 151.603 44.2721 151.787 44.4946C151.97 44.7171 152.043 44.9759 151.931 45.086C151.82 45.1962 151.966 45.4923 152.297 45.7525C152.591 46.0125 152.846 46.5676 152.844 47.0106C152.841 47.4535 152.986 47.9711 153.169 48.1936C153.463 48.5274 154.369 51.5594 154.329 52.1129C154.329 52.2606 154.73 53.1856 155.204 54.1111C155.716 55.0737 156.116 56.1094 156.115 56.4048C156.113 56.737 156.624 57.8841 157.245 58.995C157.867 60.1058 158.668 62.1774 159.029 63.6559C159.932 67.2047 160.26 67.9817 161.762 70.2048C162.457 71.2422 163.042 72.3897 163.04 72.7588C163.038 73.0911 163.292 73.8677 163.547 74.4597C164.095 75.5701 164.856 78.1952 165.83 82.3719C166.155 83.7026 166.846 85.5891 167.431 86.6258C167.979 87.6255 168.672 89.2905 168.961 90.3257C169.251 91.324 170.09 93.285 170.784 94.6546C172.318 97.5793 173.008 99.761 173.616 103.271C173.83 104.675 174.336 106.634 174.7 107.633C175.101 108.595 175.57 110.591 175.783 112.069C175.96 113.509 176.792 116.726 177.627 119.166C179.915 126.193 180.014 128.297 178.221 132.164C177.698 133.305 177.067 133.893 175.809 134.513C174.217 135.317 173.959 135.315 170.897 134.93C169.126 134.698 167.172 134.282 166.583 134.02C165.957 133.758 165.293 133.533 165.109 133.532C164.076 133.416 161.205 131.776 160.987 131.184C160.878 130.814 160.476 130.185 160.146 129.777C159.779 129.369 159.086 127.851 158.54 126.372C157.485 123.524 156.933 123.115 154.275 123.248C153.573 123.281 152.466 123.164 151.84 122.976C151.029 122.713 149.884 122.818 147.592 123.396C145.892 123.83 144.302 124.264 144.117 124.411C143.895 124.52 143.118 124.738 142.342 124.881C141.603 125.025 140.864 125.279 140.752 125.463C140.64 125.647 140.307 125.793 139.975 125.791C139.643 125.789 138.533 126.189 137.497 126.664C136.461 127.138 134.759 127.867 133.76 128.304C132.724 128.742 131.613 129.253 131.243 129.472C130.873 129.655 129.208 130.31 127.544 130.928C124.4 132.056 123.993 132.238 116.184 135.887C111.076 138.296 109.781 138.806 108.414 139.056C107.897 139.128 106.418 139.526 105.124 139.961C103.83 140.397 102.499 140.722 102.24 140.721C101.945 140.719 101.242 140.974 100.65 141.266C100.058 141.558 99.2811 141.849 98.9115 141.921C98.0986 142.064 93.7319 144.034 91.3993 145.313C88.0671 147.141 83.6637 149.074 81.5562 149.69C80.3362 150.015 78.1171 150.778 76.6003 151.398C75.0836 151.98 73.5671 152.526 73.2716 152.561C72.9761 152.596 72.4587 152.704 72.1626 152.85C71.8666 152.959 70.7572 153.322 69.6851 153.612C67.2081 154.3 66.5416 154.665 63.5757 157.012C62.204 158.075 60.9072 158.954 60.7226 158.953C60.5012 158.952 60.316 159.061 60.3152 159.209C60.3132 159.578 58.1656 160.785 57.538 160.781C57.2796 160.78 56.9835 160.926 56.9087 161.11C56.7213 161.626 47.9203 164.42 43.3003 165.466C42.3764 165.645 39.9738 166.223 37.9407 166.729C35.9076 167.234 33.8015 167.592 33.3223 167.479C32.8061 167.365 31.4047 167.099 30.1878 166.871C29.0077 166.643 27.5703 166.229 27.0549 165.968C25.5457 165.185 22.3873 162.177 21.5096 160.659C21.0707 159.918 20.1928 158.437 19.5337 157.437C18.8749 156.4 17.9246 154.659 17.3769 153.549C16.8292 152.439 16.1355 151.032 15.8065 150.44C15.2949 149.477 14.167 146.444 12.3859 141.34C11.1864 137.9 9.42341 129.474 9.72314 128.664C9.83527 128.406 9.76527 127.704 9.54698 127.112C9.18407 125.966 9.33617 118.362 9.75285 116.408Z'
        fill='#202020'
      />
      <path
        d='M145.469 110.706C146.311 107.532 147.866 104.618 149.938 102.092C150.909 100.862 152.075 99.8253 153.306 98.8539C153.889 98.4005 154.471 97.9472 155.119 97.6234C155.508 97.4291 155.637 97.3643 156.026 97.6881C157.321 98.7891 155.831 100.797 155.054 101.703C153.824 103.128 152.399 104.423 150.909 105.589C149.873 106.431 148.189 107.856 148.708 109.41C149.226 111.029 151.557 111.159 152.982 111.353C157.58 112.001 162.243 112.26 166.841 112.13C167.489 112.13 168.784 111.742 168.978 110.965C169.173 110.123 168.007 110.058 167.489 110.058C163.279 110.187 159.005 109.928 154.86 109.345C154.277 109.281 153.111 109.281 152.593 108.827C151.946 108.245 152.658 107.467 153.047 107.014C153.63 106.431 154.342 105.978 154.99 105.395C155.831 104.683 156.609 103.905 157.386 103.128C158.552 101.898 159.976 100.408 160.171 98.6596C160.365 96.7814 158.94 95.6157 157.192 95.4214C153.37 95.0328 149.873 98.271 147.477 100.862C144.822 103.711 142.944 107.208 141.907 110.965C141.519 112.325 145.146 112.001 145.469 110.706Z'
        fill='white'
      />
      <path
        d='M125.522 98.7891C123.838 100.538 122.025 102.481 121.572 104.942C121.183 107.014 121.766 109.345 123.579 110.576C125.911 112.13 129.214 111.418 131.804 110.835C134.719 110.187 137.568 109.281 140.288 108.05C140.806 107.791 141.778 107.338 141.325 106.625C140.871 105.978 139.511 106.172 138.928 106.431C136.726 107.403 134.46 108.245 132.128 108.763C130.509 109.151 127.919 110.058 126.429 108.827C125.134 107.791 124.939 105.784 125.328 104.229C125.911 102.157 127.465 100.538 128.89 98.9834C129.473 98.3358 128.437 97.8824 127.983 97.8177C127.077 97.8824 126.105 98.1415 125.522 98.7891Z'
        fill='white'
      />
      <path
        d='M123.709 104.553C126.688 104.359 129.667 104.1 132.646 103.905C133.359 103.841 134.524 103.582 134.783 102.74C134.978 101.962 133.747 101.833 133.294 101.833C130.315 102.027 127.336 102.286 124.357 102.481C123.644 102.545 122.478 102.804 122.219 103.646C122.025 104.423 123.256 104.553 123.709 104.553Z'
        fill='white'
      />
      <path
        d='M129.084 99.2424C132.841 99.3072 136.532 99.372 140.288 99.4367C141.13 99.4367 142.231 99.3072 142.685 98.5948C143.138 97.9472 142.361 97.4291 141.778 97.4291C138.022 97.3643 134.33 97.2996 130.574 97.2348C129.732 97.2348 128.631 97.3643 128.178 98.0767C127.659 98.7243 128.437 99.2424 129.084 99.2424Z'
        fill='white'
      />
      <path
        d='M100.653 110.511C102.79 105.978 105.64 101.833 109.008 98.2062C107.907 98.0767 106.741 98.0119 105.64 97.8824C103.891 101.121 103.309 107.403 108.425 107.532C110.886 107.597 112.894 106.302 114.642 104.747C116.52 102.999 118.398 101.315 120.341 99.5663C119.24 99.5015 118.204 99.372 117.103 99.3072C115.678 102.999 115.355 107.079 116.067 110.965C116.326 112.26 119.953 111.547 119.694 110.187C118.981 106.431 119.305 102.61 120.665 99.0481C120.924 98.4653 120.017 98.2062 119.629 98.1415C118.916 98.0767 118.01 98.271 117.427 98.7243C116.002 100.02 114.577 101.315 113.153 102.61C112.505 103.258 111.793 103.841 111.145 104.488C110.756 104.812 110.109 105.46 109.655 105.524C108.619 105.719 108.166 103.905 108.036 103.128C107.842 101.444 108.166 99.6958 108.943 98.2062C109.332 97.4938 108.684 97.1053 108.036 97.0405C107.13 96.9757 106.223 97.2348 105.64 97.8824C102.078 101.703 99.2285 106.043 96.9618 110.706C96.5732 111.483 98.0628 111.612 98.4513 111.612C99.358 111.612 100.265 111.288 100.653 110.511Z'
        fill='white'
      />
      <path
        d='M82.3901 110.317C85.3692 106.302 87.7654 101.833 89.3845 97.1053C89.8378 95.7452 86.3406 96.1986 85.8873 97.0405C84.6568 99.2424 82.3901 105.784 86.8587 105.848C88.9311 105.913 90.7445 104.488 92.3636 103.258C93.9179 102.092 95.3427 100.797 96.6379 99.372C95.4722 99.372 94.3065 99.372 93.1407 99.3072C91.1331 103.905 90.7445 109.086 92.0398 113.944C92.3636 115.239 96.0551 114.462 95.6665 113.167C94.436 108.439 94.8246 103.517 96.7675 99.0481C97.0913 98.3358 95.8608 98.1415 95.4722 98.1415C94.6303 98.1415 93.8531 98.4005 93.2703 98.9834C92.3636 99.9548 91.3921 100.862 90.4207 101.639C89.9026 102.027 89.3845 102.481 88.8016 102.869C88.6073 102.999 88.413 103.128 88.2187 103.258C88.0892 103.323 87.5711 103.582 87.5063 103.711C87.2473 103.905 87.5063 103.905 88.3483 103.711C88.2835 103.646 88.2187 103.517 88.154 103.387C88.0892 103.193 88.0244 102.934 88.0244 102.74C87.9597 102.157 88.0244 101.509 88.0892 100.862C88.2835 99.5663 88.6721 98.271 89.3197 97.1053C88.154 97.1053 86.9882 97.1053 85.8225 97.0405C84.2034 101.574 81.9367 105.848 79.0871 109.734C78.569 110.446 79.4109 110.835 79.9938 110.9C80.7062 111.288 81.872 111.029 82.3901 110.317Z'
        fill='white'
      />
      <path
        d='M79.6053 100.797C71.5746 102.804 63.8678 105.524 56.4201 109.086C55.8372 109.345 55.3839 110.058 56.0315 110.511C56.7439 110.965 57.9096 110.641 58.622 110.317C65.4869 107.079 72.6756 104.488 80.0586 102.675C80.6415 102.545 81.8072 102.157 81.6777 101.315C81.4834 100.602 80.1234 100.667 79.6053 100.797Z'
        fill='white'
      />
      <path
        d='M62.443 112.389C64.904 107.726 67.4298 103.128 69.8908 98.4653C68.7898 98.5948 67.6241 98.7891 66.5231 98.9186C68.5955 102.61 70.6679 106.302 72.7404 109.993C73.1289 110.641 74.5537 110.382 75.1366 110.187C75.7195 109.993 76.5614 109.475 76.1728 108.763C74.1004 105.071 72.028 101.38 69.9556 97.6881C69.6965 97.2348 68.6603 97.2996 68.2717 97.2996C67.7536 97.3643 66.8469 97.6234 66.5231 98.1415C64.0621 102.804 61.5364 107.403 59.0754 112.066C58.2982 113.62 61.8602 113.426 62.443 112.389Z'
        fill='white'
      />
      <path
        d='M47.3532 98.6596C44.5684 102.545 42.6255 107.014 41.654 111.742C41.395 112.907 43.5969 112.648 44.1151 112.454C48.6485 110.576 52.9876 108.309 57.1324 105.654C57.6505 105.33 58.2334 104.683 57.521 104.229C56.8086 103.841 55.5781 103.97 54.9305 104.423C51.1095 106.949 47.0294 109.151 42.755 110.9C43.5969 111.159 44.4389 111.353 45.216 111.612C46.1227 107.079 47.9361 102.804 50.6561 99.0481C51.1742 98.3358 50.3323 97.9472 49.7494 97.8824C48.9723 97.6881 47.8713 97.9472 47.3532 98.6596Z'
        fill='white'
      />
      <path
        d='M32.5225 111.029C32.7167 107.014 32.911 103.063 33.1701 99.0482C33.1701 98.6596 33.1701 98.2062 33.2349 97.8177C33.2349 97.6881 33.3644 97.3643 33.3644 97.2995C33.3644 97.1053 32.9758 97.4291 32.9758 97.4938C32.8463 97.4938 32.8463 97.4938 32.9758 97.4938C33.0406 97.4938 33.1701 97.4938 33.2349 97.4938C33.4939 97.4938 33.753 97.4291 34.012 97.4291C34.5301 97.3643 35.0482 97.3643 35.5016 97.2995C37.5092 97.1053 39.5169 96.9757 41.5893 96.7814C42.2369 96.7167 43.5322 96.4576 43.7265 95.6157C43.9208 94.8385 42.755 94.6443 42.2369 94.709C39.9055 94.9033 37.574 95.0976 35.2425 95.2919C33.3644 95.4862 30.3205 95.4214 29.6729 97.6881C29.4138 98.6596 29.4786 99.8253 29.4138 100.797C29.3491 101.962 29.2843 103.128 29.2195 104.294C29.09 106.625 28.9605 108.957 28.831 111.288C28.7662 112.066 29.7376 112.26 30.3205 112.195C30.9681 112.13 32.5225 111.806 32.5225 111.029Z'
        fill='white'
      />
      <path
        d='M27.0176 105.006C32.5225 104.164 38.0921 103.258 43.597 102.416C44.1798 102.351 45.3456 101.833 45.2161 101.056C45.0865 100.279 43.7265 100.408 43.2084 100.473C37.7035 101.315 32.1339 102.222 26.629 103.063C26.0462 103.128 24.8804 103.646 25.01 104.423C25.1395 105.201 26.4995 105.071 27.0176 105.006Z'
        fill='white'
      />
      <path
        d='M72.8311 76.9891C73.3553 76.6979 73.8212 76.4649 74.3454 76.1737C74.5201 76.1155 74.5201 76.1155 74.2871 76.1737C74.3454 76.1155 74.4619 76.1155 74.5201 76.0573C74.6366 75.999 74.7531 75.9408 74.8695 75.9408C75.1607 75.8243 75.4519 75.7078 75.7431 75.5913C76.0343 75.4749 76.2673 75.4166 76.5585 75.3001C76.675 75.2419 76.6167 75.3001 76.442 75.3584C76.5003 75.3584 76.6167 75.3001 76.675 75.3001C76.7915 75.2419 76.9662 75.2419 77.0827 75.1837C77.3739 75.1254 77.6651 75.0672 77.898 75.0089C78.0145 75.0089 78.1892 74.9507 78.3057 74.9507C78.4222 74.9507 78.9463 74.8342 78.4804 74.9507C78.8881 74.8925 79.354 74.8342 79.7035 74.6013C79.9364 74.4848 80.2859 74.2518 80.3441 73.9606C80.5188 73.2617 79.4123 73.087 79.0046 73.1453C76.1508 73.5529 73.3553 74.4265 70.851 75.8825C70.3851 76.1155 69.8027 76.8144 70.5015 77.1638C71.1422 77.5133 72.1905 77.3385 72.8311 76.9891Z'
        fill='white'
      />
      <path
        d='M114.589 73.6112C116.744 73.2617 118.899 72.5629 120.821 71.5145C121.054 71.3981 121.403 71.1069 121.462 70.8739C121.52 70.6409 121.403 70.3497 121.17 70.2333C120.471 69.8838 119.481 70.0585 118.841 70.408C118.666 70.5245 118.433 70.6409 118.258 70.6992C118.142 70.7574 118.025 70.8157 117.909 70.8739C117.618 70.9904 118.2 70.7574 117.909 70.8739C117.501 71.0486 117.035 71.2233 116.569 71.3981C116.336 71.4563 116.162 71.5145 115.929 71.631C115.812 71.6893 115.871 71.631 116.103 71.5728C116.045 71.5728 115.987 71.631 115.929 71.631C115.812 71.631 115.696 71.6893 115.579 71.6893C115.113 71.8057 114.647 71.864 114.182 71.9805C113.832 72.0387 113.366 72.2134 113.075 72.4464C112.9 72.5629 112.667 72.9123 112.726 73.1453C112.959 73.7859 114.065 73.7277 114.589 73.6112Z'
        fill='white'
      />
      <path
        d='M76.442 78.9693C76.2673 76.8726 76.442 74.776 76.9079 72.7376C77.1409 71.7475 77.4321 70.7574 77.7815 69.8256C77.9563 69.3597 78.1892 68.8937 78.3639 68.4278C78.5387 68.0201 78.7134 67.496 79.1211 67.263C78.8881 67.3795 78.6551 67.496 78.4222 67.6125C78.4804 67.6125 78.5387 67.5542 78.5969 67.5542C78.3057 67.6125 78.0145 67.6707 77.7233 67.7289C77.7815 67.7289 77.8398 67.7289 77.898 67.7289C77.6651 67.7289 77.3739 67.6707 77.1409 67.6707C77.0244 67.5542 77.0244 67.5542 77.1409 67.7289C77.1991 67.8454 77.2574 67.9037 77.2574 68.0201C77.3739 68.2531 77.4321 68.4861 77.5486 68.719C77.7815 69.2432 78.0145 69.7673 78.2475 70.2915C78.7134 71.2816 79.1211 72.3299 79.587 73.32C80.5188 75.3584 81.3924 77.3968 82.3243 79.4352C82.6155 80.0758 83.5473 80.0758 84.1297 79.9593C84.4791 79.9011 85.8769 79.3769 85.5857 78.7363C83.8385 74.8925 82.1495 70.9904 80.4023 67.1465C79.9364 66.1565 79.1211 65.807 78.0145 65.9817C76.7332 66.1565 76.0343 66.9136 75.4519 67.9619C74.5783 69.6509 73.9377 71.4563 73.53 73.32C73.0641 75.4166 72.9476 77.5715 73.1223 79.7264C73.1806 80.4253 74.5201 80.3088 74.9278 80.2505C75.5684 80.0758 76.5003 79.6681 76.442 78.9693Z'
        fill='white'
      />
      <path
        d='M90.9438 79.8429C91.3515 75.4749 92.3416 71.2234 93.7976 67.0883C92.691 67.263 91.6427 67.3795 90.5361 67.5542C90.7108 69.9421 91.235 72.3299 92.1086 74.543C92.5163 75.5913 92.924 76.7562 93.5646 77.6298C94.2635 78.5616 95.4283 78.911 96.5931 78.7363C97.8744 78.5033 98.6897 77.8627 99.2139 76.6979C99.738 75.4749 100.204 74.2518 100.728 72.9705C101.718 70.5245 102.708 68.0202 103.698 65.5741C103.99 64.8752 102.708 64.7587 102.359 64.7587C101.66 64.817 100.728 65.1082 100.437 65.807C99.6216 67.7872 98.8644 69.7674 98.0491 71.7475C97.6414 72.7376 97.2337 73.7859 96.826 74.776C96.6513 75.2419 96.4766 75.6496 96.3019 76.1155C96.1854 76.4067 96.0689 76.6397 96.0107 76.9309L95.7777 77.3386C96.2436 77.2221 96.7096 77.1056 97.1755 76.9891C97.1172 76.9891 97.1172 76.9309 97.059 76.9309C96.9425 76.7561 96.7678 76.6397 96.6513 76.465C96.4184 76.1155 96.2436 75.7078 96.0689 75.3002C95.6612 74.4266 95.3118 73.5529 95.0788 72.6793C94.4964 70.8157 94.0888 68.8355 93.9723 66.9136C93.914 66.273 92.7492 66.3312 92.3998 66.3894C91.8174 66.4477 90.9438 66.7389 90.7108 67.3795C89.1966 71.4563 88.2648 75.7661 87.8571 80.1341C87.7988 80.8329 88.6724 81.0077 89.1966 80.9494C89.546 80.8329 90.8856 80.5417 90.9438 79.8429Z'
        fill='white'
      />
      <path
        d='M107.6 77.1056C107.251 74.3101 107.426 71.4563 108.241 68.719C108.591 67.496 105.271 67.7872 104.98 68.952C104.164 71.8057 103.931 74.8342 104.339 77.8045C104.455 78.5033 105.679 78.4451 106.144 78.3286C106.669 78.1539 107.717 77.8045 107.6 77.1056Z'
        fill='white'
      />
      <path
        d='M106.028 65.0499C106.261 65.5741 106.552 66.04 106.96 66.4477C107.367 66.8553 107.833 67.2048 108.358 67.4377C108.707 67.6125 109.056 67.6707 109.406 67.6125C109.639 67.6125 109.872 67.5542 110.047 67.496C110.279 67.4378 110.454 67.3795 110.629 67.263C110.745 67.2048 110.804 67.1466 110.92 67.0883C111.095 66.9718 111.211 66.7971 111.27 66.6224C111.27 66.5642 111.27 66.4477 111.27 66.3894C111.211 66.2147 111.095 66.0982 110.978 65.9818C110.687 65.8653 110.454 65.6906 110.163 65.4576C110.221 65.5158 110.279 65.5741 110.396 65.6323C109.93 65.2829 109.581 64.817 109.289 64.2928C109.348 64.351 109.348 64.4093 109.406 64.5258C109.406 64.4675 109.348 64.4093 109.348 64.351C109.348 64.2346 109.231 64.1181 109.115 64.0598C108.998 63.9434 108.882 63.8851 108.707 63.8269C108.532 63.7686 108.358 63.7686 108.125 63.7686C107.892 63.7686 107.717 63.7686 107.484 63.8269C107.076 63.9434 106.669 64.0598 106.377 64.2928C106.319 64.351 106.203 64.4675 106.144 64.5258C106.028 64.7005 105.97 64.8752 106.028 65.0499Z'
        fill='white'
      />
      <path
        d='M111.444 70.2915C111.328 73.2035 111.27 76.1738 111.153 79.0857C111.153 79.3187 111.561 79.5517 111.735 79.6099C112.143 79.7264 112.551 79.6681 112.959 79.6099C115.754 79.144 118.491 78.5616 121.229 77.8627C121.695 77.7462 122.859 77.3968 122.685 76.6397C122.568 75.9408 121.345 75.999 120.879 76.1155C118.142 76.8144 115.405 77.455 112.609 77.8627C113.191 78.0374 113.832 78.2121 114.415 78.3869C114.531 75.4749 114.589 72.5046 114.706 69.5926C114.706 69.3597 114.298 69.1267 114.123 69.0685C113.774 68.952 113.25 68.952 112.9 69.0685C112.318 69.2432 111.503 69.5344 111.444 70.2915Z'
        fill='white'
      />
      <path
        d='M130.663 64.5257C128.858 67.4377 127.402 70.6409 126.004 73.7277C125.247 75.4166 123.791 78.0374 125.83 79.4352C126.82 80.1341 128.101 80.1923 129.266 80.1923C130.663 80.1923 132.119 80.0176 133.517 79.9011C137.012 79.6681 140.564 79.4352 144.059 79.2022C144.641 79.144 145.806 78.911 145.981 78.1539C146.155 77.455 145.107 77.3385 144.641 77.3385C141.787 77.5133 138.934 77.688 136.08 77.9209C134.624 78.0374 133.226 78.0957 131.77 78.2121C130.838 78.2704 129.848 78.5033 128.974 78.2121C127.053 77.6297 128.683 74.776 129.207 73.6112C129.965 71.9222 130.78 70.2333 131.654 68.6025C132.294 67.3213 132.935 66.04 133.692 64.8169C134.449 63.4192 131.246 63.5357 130.663 64.5257Z'
        fill='white'
      />
      <path
        d='M114.356 68.4278C117.618 67.3213 120.704 66.3894 123.966 65.5158C124.432 65.3994 125.597 65.0499 125.422 64.2928C125.305 63.5939 124.082 63.6522 123.616 63.7686C120.064 64.6422 116.569 65.6906 113.133 66.9136C112.667 67.0883 111.735 67.6125 112.201 68.1949C112.667 68.8355 113.774 68.6025 114.356 68.4278Z'
        fill='white'
      />
      <path
        d='M61.6491 79.0857C61.1249 74.2518 60.9502 69.3597 61.1249 64.5257C60.0766 64.9334 59.0283 65.2829 57.9217 65.6905C60.1931 66.7971 62.2315 68.2531 63.9204 70.1168C65.027 71.3398 67.8225 74.543 65.7259 76.0573C65.8423 75.9408 65.2599 76.2902 65.4929 76.1737C65.4347 76.232 64.8523 76.4067 65.027 76.3485C64.5028 76.5232 63.9204 76.5814 63.3963 76.6979C62.9886 76.7561 62.2315 76.8726 61.6491 76.9309C61.1831 76.9891 60.7755 77.0473 60.3095 77.1638C59.5524 77.3385 58.9118 77.5715 58.2711 77.9209C57.9799 78.0374 57.747 78.2121 57.4558 78.3286C57.8052 78.1539 57.1063 78.4451 57.0481 78.5033C56.7569 78.6198 56.4657 78.7363 56.1745 78.8528C55.5921 78.911 54.6603 79.4352 55.1262 80.0758C55.5339 80.7165 56.8734 80.4835 57.4558 80.2505C58.3294 79.9593 59.1447 79.6099 59.9601 79.2022C60.1348 79.144 60.3095 79.0275 60.4843 78.911C60.5425 78.911 60.0766 79.0275 60.426 78.9693C60.4843 78.9693 60.8337 78.8528 60.5425 78.911C60.1931 78.9693 60.659 78.911 60.7755 78.8528C60.9502 78.7945 61.1249 78.7945 61.2996 78.7363C61.7655 78.6781 62.0567 78.6198 62.5227 78.5616C63.6292 78.4451 64.7358 78.2704 65.7841 77.9209C67.706 77.3968 69.9191 76.1737 69.9774 73.9024C69.9774 71.8057 68.2302 69.7673 66.8324 68.3113C65.0852 66.5059 63.0468 65.0499 60.7755 63.9433C59.8436 63.4774 57.6305 63.7686 57.5723 65.1081C57.3975 70.0003 57.5723 74.8342 58.0964 79.6681C58.2711 81.0077 61.7655 80.4253 61.6491 79.0857Z'
        fill='white'
      />
    </Link>
  );
};