import React from 'react';

import './buttons.css';

const classNames = (classnames) => classnames.join(' ');

const Button = ({ className = '', primary, secondary, grey, ...props }) => {
  return (
    <button
      type='button'
      className={classNames([
        'button',
        className,
        primary ? 'button--primary' : '',
        secondary ? 'button--secondary' : '',
        grey ? 'button--grey' : '',
      ])}
      {...props}
    />
  );
};
//Leijuva nappi
const FloatingButton = ({ className = '', ...props }) => {
  return (
    <Button
      className={classNames(['button--floating', className])}
      {...props}
    />
  );
};
//satunnaisen reseptin nappi
const RandomButton = ({ className = '', ...props }) => {
  return (
    <Button className={classNames(['button--random', className])} {...props} />
  );
};

export { Button as default, Button, FloatingButton, RandomButton };
