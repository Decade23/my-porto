export default function Button({
    label, url, css = 'bg-blue-500'
}) {
  return (
    <a href={`${url || ''}`} className={`text-a-button  ${css}`}>
      {label || 'submit'}
    </a>
  );
}
