import { formateDate } from '../../utils/formateDstes'

const DoctorAbout = () => {
  return (
    <div>
      <div>
      <h3  className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 '>
            About of
     
      <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
            James Kurian
      </span>
      </h3>
      <p className="text_para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod molestiae 
            atque dicta a temporibus voluptates blanditiis necessitatibus, itaque sed 
            voluptatum expedita. Consectetur quas incidunt voluptas consequatur eum. 
            Maiores, optio quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quidem ut unde optio doloribus. Necessitatibus, quo! Nostrum facilis expedita magnam, sed vitae fugiat at quas excepturi exercitationem recusandae, adipisci ratione.
      </p>
    </div>
      
      <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                  Education
            </h3>

            <ul className='pt-4 md:p-5'>
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div>
                              <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                               {formateDate("09-13-2014")} - {formateDate("07-20-2016")}
                              </span>
                              <p className='text-[16px] leading-6 font-medium text-textColor'>
                                    PHD in Surgeon
                              </p>
                        </div>
                        <p className='text-[14px] leading-5 font-medium text-textColor'>
                                    New Appolo Hospital ,Chennai
                              </p>
                  </li>

                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div>
                              <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                              {formateDate("06-29-2008")} - {formateDate("08-05-2012")}
                              </span>
                              <p className='text-[16px] leading-6 font-medium text-textColor'>
                                    PHD in Surgeon
                              </p>
                        </div>
                        <p className='text-[14px] leading-5 font-medium text-textColor'>
                                    New Appolo Hospital ,Chennai
                              </p>
                  </li>
            </ul>
      </div>

      <div className="mt-12">
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                  Experience
            </h3>

            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                  <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold ">
                        {formateDate("09-13-2016")} - {formateDate("07-20-2020")}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                                    Sr. surgeon
                        </p>
                        <p className='text-[14px] leading-5 font-medium text-textColor'>
                                    New Appolo Hospital ,Chennai
                        </p>

                        

                  </li>

                  <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold ">
                        {formateDate("09-13-2016")} - {formateDate("07-20-2020")}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                                    Sr. surgeon
                        </p>
                        <p className='text-[14px] leading-5 font-medium text-textColor'>
                                    New Appolo Hospital ,Chennai
                        </p>

                        

                  </li>
            </ul>

            

      </div>

    </div>
  )
}

export default DoctorAbout