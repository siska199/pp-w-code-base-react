import Divider from '@components/ui/Divider';

const ExamplesPage = () => {
  return (
    <div className='border p-4'>
      <Divider
        text={'Siska'}
        width={"100%"}
      />
      <Divider
        text={'Left Aligned'}
        width={"100%"}
        variant={"left-aligned"}
      />
      <Divider
        text={'Right Aligned'}
        width={"100%"}
        variant={"right-aligned"}
      />
    </div>
  );
};

export default ExamplesPage;