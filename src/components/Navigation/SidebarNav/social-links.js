import React from 'react';
const links = [
  { href: "#!", faIcon: "fab fa-twitter" },
  { href: "#!", faIcon: "fab fa-google-plus-g" },
  { href: "#!", faIcon: "fab fa-instagram" },
  { href: "#!", faIcon: "fab fa-facebook-f" },
]
const SidebarSocialLinks = (props) => {
  const _li = links.map((item) => {
    return (
      <li>
        <a href={item.href} className="social-links__item">
          <i className={item.faIcon}></i>
        </a>
      </li>
    )
  });

  return (
    <ul className="social-links">
      {_li}
    </ul>
  );
}

export default SidebarSocialLinks;