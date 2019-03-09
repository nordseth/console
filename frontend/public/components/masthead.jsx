import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Brand, PageHeader } from '@patternfly/react-core';

import { MastheadToolbar } from './masthead-toolbar';
import { history } from './utils';
import okdLogoImg from '../imgs/okd-logo.svg';
import openshiftLogoImg from '../imgs/openshift-logo.svg';
import ocpLogoImg from '../imgs/openshift-platform-logo.svg';
import onlineLogoImg from '../imgs/openshift-online-logo.svg';
import dedicatedLogoImg from '../imgs/openshift-dedicated-logo.svg';
import azureLogoImg from '../imgs/azure-red-hat-openshift-logo.svg';
import * as pfBg992 from '../../public/imgs/pfbg_992.jpg';

export const getBrandingDetails = () => {
  let backgroundImg, logoImg, logoAlt, productTitle;
  // Webpack won't bundle these images if we don't directly reference them, hence the switch
  switch (window.SERVER_FLAGS.branding) {
    case 'openshift':
      backgroundImg = pfBg992;
      logoImg = openshiftLogoImg;
      logoAlt = 'OpenShift';
      productTitle = 'Red Hat OpenShift';
      break;
    case 'ocp':
      backgroundImg = pfBg992;
      logoImg = ocpLogoImg;
      logoAlt = 'OpenShift Container Platform';
      productTitle = 'Red Hat OpenShift Container Platform';
      break;
    case 'online':
      backgroundImg = pfBg992;
      logoImg = onlineLogoImg;
      logoAlt = 'OpenShift Online';
      productTitle = 'Red Hat OpenShift Online';
      break;
    case 'dedicated':
      backgroundImg = pfBg992;
      logoImg = dedicatedLogoImg;
      logoAlt = 'OpenShift Dedicated';
      productTitle = 'Red Hat OpenShift Dedicated';
      break;
    case 'azure':
      backgroundImg = pfBg992;
      logoImg = azureLogoImg;
      logoAlt = 'Azure Red Hat OpenShift';
      productTitle = 'Azure Red Hat OpenShift';
      break;
    default:
      backgroundImg = pfBg992;
      logoImg = okdLogoImg;
      logoAlt = 'OKD';
      productTitle = 'OKD';
  }
  return { backgroundImg, logoImg, logoAlt, productTitle };
};

export const Masthead = ({ onNavToggle }) => {
  const details = getBrandingDetails();
  const defaultRoute = '/';
  const logoProps = {
    href: defaultRoute,
    // use onClick to prevent browser reload
    onClick: e => {
      e.preventDefault();
      history.push(defaultRoute);
    },
  };

  return (
    <PageHeader
      logo={<Brand src={details.logoImg} alt={details.logoAlt} />}
      logoProps={logoProps}
      toolbar={<MastheadToolbar />}
      showNavToggle
      onNavToggle={onNavToggle}
    />
  );
};

Masthead.propTypes = {
  onNavToggle: PropTypes.func,
};
