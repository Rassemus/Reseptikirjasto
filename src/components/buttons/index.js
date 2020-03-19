import React from 'react';

import './buttons.css';

const classNames = classnames => classnames.join(' ');

const Button = ({ className = '', primary, secondary, ...props }) => {
  return (
    <button
      type='button'
      className={classNames([
        'button',
        className,
        primary ? 'button--primary' : '',
        secondary ? 'button--secondary' : ''
      ])}
      {...props}
    />
  );
};

const FloatingButton = ({ className = '', ...props }) => {
  return (
    <Button
      className={classNames(['button--floating', className])}
      {...props}
    />
  );
};
const RandomButton = ({ className = '', ...props }) => {
  return (
    <Button className={classNames(['button--random', className])} {...props} />
  );
};

export { Button as default, Button, FloatingButton, RandomButton };
