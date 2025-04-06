type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function ExternalLink({ href, children, ...props }: ExternalLinkProps) {
  const isExternal =
    href && (href.startsWith('http://') || href.startsWith('https://'));

  if (isExternal) {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
