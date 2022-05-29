export default function Button({
    label, url, css
}) {
  return (
    <a href={`${url || ''}`} className={`text-a-button  ${css}`}>
      {label || 'submit'}
    </a>
  );
}
