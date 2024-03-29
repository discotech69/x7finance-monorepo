export function SnapshotLogo(props: any) {
  const { size = 24, fill = '#000000' } = props;
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M483.9,193.8c-4.2-8.9-13.3-14.6-23.1-14.6H307.2V25.6c0-10.8-6.8-20.5-17-24.1C280-2.1,268.6,1,261.8,9.4L31.4,291 c-6.3,7.6-7.6,18.2-3.3,27.2c4.2,8.9,13.3,14.6,23.1,14.6h153.6l0,153.6c0,10.8,6.8,20.5,17,24.1c10.2,3.6,21.6,0.5,28.4-7.9 L480.6,221C486.9,213.4,488.2,202.8,483.9,193.8z M256,414.7V307.2c0-6.7-2.7-13.3-7.5-18.1c-4.8-4.8-11.4-7.5-18.1-7.5H105.2 L256,97.3l0,107.5c0,6.7,2.7,13.3,7.5,18.1c4.8,4.8,11.4,7.5,18.1,7.5h125.2L256,414.7z" />
    </svg>
  );
}
