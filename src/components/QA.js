import ProfileImg from './ProfileImg'
import Input from './Input'

function QA(){

  return(
    <div className="p-8 shadow-lg rounded-lg bg-white">
<div className='flex gap-2 w-full'>
  <ProfileImg/>
      <div className="flex flex-col gap-2 ml-3 container">
      <h1 className="font-bold">Naam</h1> 
      <span className="text-gray-500">12 september 2023</span>
      </div>
</div>
<div className="container">
  <div className="container ml-10  my-4 p-8 flex flex-col gap-3">
      <p>    Sweet love, renew thy force; be it not said Thy edge should blunter be than appetite, Which but to-day by feeding is allay'd, To-morrow sharpened in his former might: So, love, be thou, although to-day thou fill Thy hungry eyes, even till they wink with fulness, To-morrow see again,</p>
  
  <div className='flex w-full flex-col'>
    <div className="flex  mt-4 gap-2">
    <ProfileImg/>
      <div className="flex flex-col gap-2  container">
      <h1 className="font-bold">Naam</h1> 
      <span className="text-gray-500">12 september 2023</span>
      </div>
    </div>
      <div className="container ml-10   p-8 flex flex-col gap-3">
      <p>    Sweet love, renew thy force; be it not said Thy edge should blunter be than appetite, Which but to-day by feeding is allay'd, To-morrow sharpened in his former might: So, love, be thou, although to-day thou fill Thy hungry eyes, even till they wink with fulness, To-morrow see again,</p>
      <h1 className="mt-4 font-medium">Naam Naam</h1>
      </div>
</div>
  </div >
</div>
<div className="shadow-none">
<Input/>
</div>
    </div>
  )
}
export default QA