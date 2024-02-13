import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import BaseDropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import BaseDropdownItem from 'react-bootstrap/DropdownItem';
import BaseDropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownDeprecated from './deprecated';
import Button from '../Button';
import IconButton from '../IconButton';

const Dropdown = React.forwardRef(
  // eslint-disable-next-line prefer-arrow-callback
  function Dropdown({
    show,
    autoClose,
    onToggle,
    variant,
    className,
    ...rest
  }, ref) {
    const [internalShow, setInternalShow] = React.useState(show);
    const isClosingPermitted = (source) => {
      // autoClose=false only permits close on button click
      if (autoClose === false) {
        return source === 'click';
      }
      // autoClose=inside doesn't permit close on rootClose
      if (autoClose === 'inside') {
        return source !== 'rootClose';
      }
      // autoClose=outside doesn't permit close on select
      if (autoClose === 'outside') {
        return source !== 'select';
      }
      console.log('autoClose: ', autoClose);
      console.log('closing true');
      return true;
    };

    const handleToggle = (isOpen, event, metadata) => {
      console.log('isOpen: ', isOpen);
      if (isOpen) {
        setInternalShow(true);
        onToggle?.(isOpen, event, metadata);
        return;
      }
      let { source } = { ...metadata };
      console.log('source: ', source);
      if (event.currentTarget === document && (source !== 'keydown' || event.key === 'Escape')) {
        source = 'rootClose';
      }
      console.log(source);
      if (isClosingPermitted(source)) {
        console.log('closing now');
        setInternalShow(false);
        onToggle?.(isOpen, event, metadata);
      }
    };
    console.log('internalShow: ', internalShow);
    return (
      <BaseDropdown
        className={classNames(
          'pgn__dropdown',
          `pgn__dropdown-${variant}`,
          className,
        )}
        data-testid="dropdown"
        onToggle={handleToggle}
        ref={ref}
        show={internalShow}
        {...rest}
      />
    );
  },
);

Dropdown.propTypes = {
  autoClose: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  className: PropTypes.string,
  onToggle: PropTypes.func,
  show: PropTypes.bool,
  variant: PropTypes.oneOf(['light', 'dark']),
};

Dropdown.defaultProps = {
  autoClose: true,
  className: '',
  onToggle: undefined,
  show: false,
  variant: 'light',
};

const DropdownToggle = React.forwardRef(
  // eslint-disable-next-line prefer-arrow-callback
  function DropdownToggle({
    as,
    bsPrefix,
    ...otherProps
  }, ref) {
    // hide arrow from the toggle if it is rendered as IconButton
    // because it hinders the positioning of IconButton
    const prefix = as === IconButton ? 'pgn__dropdown-toggle-iconbutton' : bsPrefix;
    return <BaseDropdownToggle {...otherProps} as={as} bsPrefix={prefix} ref={ref} />;
  },
);

DropdownToggle.propTypes = {
  /** Specifies the base element. */
  as: PropTypes.elementType,
  /** Overrides underlying component base CSS class name. */
  bsPrefix: PropTypes.string,
  /** An html id attribute, necessary for assistive technologies, such as screen readers. */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

DropdownToggle.defaultProps = {
  as: Button,
  bsPrefix: 'dropdown-toggle',
};

Dropdown.Item = React.forwardRef(
  // eslint-disable-next-line prefer-arrow-callback
  function DropdownItem({ className, ...otherProps }, ref) {
    return (
      <BaseDropdownItem
        className={classNames(className, 'pgn__dropdown-item')}
        ref={ref}
        {...otherProps}
      />
    );
  },
);

Dropdown.Item.propTypes = {
  className: PropTypes.string,
};

Dropdown.Item.defaultProps = {
  className: undefined,
};

Dropdown.Deprecated = DropdownDeprecated;
Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Header = BaseDropdown.Header;
Dropdown.Divider = BaseDropdown.Divider;

export default Dropdown;
export { DropdownToggle };
export { default as DropdownButton } from 'react-bootstrap/DropdownButton';
export { default as SplitButton } from 'react-bootstrap/SplitButton';
