import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Hero = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <h1>THIS IS HERO PAGE</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
    <div className="bg-grey-600 grid grid-cols-3 gap-8 border-gray-100">
      <div>One of three columns</div>
      <div>One of three columns</div>
      <div>One of three columns</div>
    </div>
  </Main>
);

export default Hero;
