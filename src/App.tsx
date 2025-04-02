import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Heading attr={123} attr2={'String'}>
        Hello World!
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        consectetur ad est debitis praesentium aliquam tempore commodi eum porro
        perferendis magnam voluptate odit, culpa voluptas officia consequatur
        molestiae. Quo, veritatis?
      </p>
    </>
  );
}
