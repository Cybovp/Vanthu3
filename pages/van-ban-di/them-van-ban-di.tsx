import React, { useEffect, useState, ChangeEvent } from "react";
import Head from "next/head";
import styles from "./vanbandi.module.css";
import MyEditor from "./components/Editor";
import Select from "react-select";

function Destination({des}:{des : string}){
  return(
      <p className={`${styles.destination_target}`}>{des}</p>
  );
}
function FormLeft(){
  const options = [
    { value: "all", label: "Tất cả"},
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return(
    <div className={`${styles.form_left}`}>
      <h3 className={`${styles.header}`}>Tạo mới văn bản</h3>
      <Section style="section" label={<Required_label title ="Tên văn bản"/>} input={<Input_text placeholder="Nhập tên văn bản"/>}/>
      <Section style="section" label={<Required_label title ="Số văn bản"/>} input={<Input_text placeholder="Số /...................-..................."/>}/>
      <Section style="section" label={<Required_label title ="Trích yếu nội dung văn bản"/>} input={<Input_textarea/>}/>
      <div className={`${styles.section}`}>
        <h3 className={`${styles.small_header_text}`}>Nơi nhận văn bản</h3>
      </div>
      <div className={styles.flexarea}>
        <Section style="small_section" label={<Required_label title ="Phòng ban"/>} input={<Input_select options={options} placeholder="Nhập phòng ban người nhận văn bản" defautlValue={undefined}/>}/>
        <Section style="small_section" label={<Required_label title ="Chức vụ"/>} input={<Input_select options={options} placeholder="Nhập chức vụ người nhận văn bản" defautlValue={undefined}/>}/>
        <Section style="small_section" label={<Required_label title ="Người nhận"/>} input={<Input_select options={options} placeholder="Nhập người nhận" defautlValue={undefined}/>}/>
      </div>
      <Section style="section" label={<Label title ="Người theo dõi"/>} input={<Input_select options={options} placeholder="Chọn người theo dõi" defautlValue={undefined}/>}/>
      <div className={`${styles.section}`}>
        <h3 className={`${styles.small_header_text}`}>
          Người kí duyệt
          <Required_sign/>
          </h3>
      </div>
      <Section style="small_section" label={<Required_label title ="Phòng ban"/>} input={<Input_select options={options} placeholder="" defautlValue={options[0]}/>}/>
      <Section style="small_section" label={<Required_label title ="Chức vụ"/>} input={<Input_select options={options} placeholder="Nhập chức vụ người ký văn bản" defautlValue={undefined}/>}/>
      <Section style="small_section" label={<Required_label title ="Người ký"/>} input={<Input_select options={options} placeholder="Nhập người ký văn bản" defautlValue={undefined}/>}/>
      <div>
        <Input_checkbox />
      </div>
      <Section style="custom_section" label={<Label title ="Bút phê lãnh đạo"/>} input={<Input_textarea/>}/>
      <Section style="section" label={<Label title ="Phiếu trình văn bản"/>} input={<Input_file/>}/>
      <Section style="section" label={<Required_label title ="Tệp đính kèm"/>} input={<Input_file_2/>}/>
      <Section style="section" label={<Label title ="Ghi chú"/>} input={<Input_textarea/>}/>
      <div className={styles.khoixetduyet}>
        <div className={styles.khoixetduyet_2}>
          <Required_label title="Xét duyệt văn bản"/>
          <select className={styles.xetduyet_select}>
            <option className={styles.xetduyet_option}>Xét duyệt</option>
          </select>
          <img src={"/icon/arr_down_select.png"} alt="arrow" width={13} height={15} className={styles.xetduyet_arrow_icon} />
        </div>
      </div>
      <Confirm_area />
      <div className={styles.submit_section_1}>
        <button type="submit" className={styles.submit_button}>Hoàn thành</button>
      </div>
    </div>
  );
}
function Confirm_area(){
  const options2 = [
    { value: "all", label: "Tất cả"},
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const options = [
    { value: "1", label: "Duyệt lần lượt"},
    { value: "2", label: "Duyệt đồng thời" },
  ];
  return(
    <div >
      <div className={styles.confirm_area_top}>
        <Section style="medium_section" label={<Required_label title ="Kiểu xét duyệt văn bản"/>} input={<Input_select options={options} placeholder="" defautlValue={options[0]}/>}/>
        <Section style="medium_section" label={<Required_label title ="Thời gian phê duyệt"/>} input={<Input_calender datetype="datetime-local" placeholder="Nhập thời gain / Giờ"/>}/>
      </div>
      <div className={styles.confirm_area_bot}>
        <Section style="section" label={<Required_label title ="Người xét duyệt"/>} input={<Input_select options={options2} placeholder="" defautlValue={undefined}/>}/>
      </div>
    </div>
  );
}
function FormRight(){
  const [isShow, setShow] = React.useState(false);
  const options = [
    { value: "all", label: "Tất cả"},
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const options_date = [
    { value: "2018", label: "2018"},
    { value: "2019", label: "2019"},
    { value: "2020", label: "2020"},
    { value: "2021", label: "2021"},
    { value: "2022", label: "2022"},
    { value: "2023", label: "2023"},
    { value: "2024", label: "2024"},
    { value: "2025", label: "2025"},
    { value: "2026", label: "2026"},
  ];
  const checkHandle = () => {
    setShow((p)=> p = !p);
  }
  return(
    <div className={`${styles.form_right}`}>
      <div className={styles.form_right_top}>
        <Section style="section" label={<Required_label title ="Số văn bản"/>} input={<Input_select options={options_date} placeholder={undefined} defautlValue={options_date[5]}/>}/>
        <Section style="section" label={<Required_label title ="Loại văn bản"/>} input={<Input_select options={options} placeholder="Chọn loại văn bản" defautlValue={undefined}/>}/>
        <Section style="section" label={<Label title ="Ngày ban hành"/>} input={<Input_calender datetype="date" placeholder="Chọn thời gian có hiệu lực"/>}/>
      </div>
      <div className={styles.form_right_top2}>
        <p className={styles.right_checkbox_section}>
          <input onChange={checkHandle} type="checkbox" className={styles.check_add_mail}></input>
          <label className={styles.checkbox_label_2}>Là văn bản thay thế</label>
        </p>
        {isShow &&   
        <>
          <Section style="section" label={<Required_label title ="Số văn bản"/>} input={<Input_text placeholder="Số /...................-..................."/>}/>
          <Section style="section" label={<Required_label title ="Tên văn bản"/>} input={<Input_text placeholder="Nhập tên văn bản"/>}/>
          <Section style="section" label={<Required_label title ="Trích yếu văn bản bị thay thế"/>} input={<Custom_input_text inputclass="custom_input_text" placeholder="Nhập trích yếu nội dung văn bản"/>}/>
        </>}
      </div>
      <div className={styles.form_right_bot}>
          <SwitchInput label="Văn bản khẩn cấp" id="switch1"/>
          <SwitchInput label="Văn bản bảo mật" id="switch2"/>
          <SwitchInput label="Cho phép tải xuống" id="switch3"/>
          <SwitchInput label="Cho phép người duyệt chuyển tiếp" id="switch4"/>
          <SwitchInput label="Cho phép người nhận chuyển tiếp" id="switch5"/>
          <div className={styles.submit_section_2}>
            <button type="submit" className={styles.submit_button}>Hoàn thành</button>
          </div>
      </div>
    </div>
  );
}
function Label({title}:{title:string}){
  return(
    <p className={`${styles.label}`}>
      {title}
      </p>
  );
}
function Required_label({title}:{title:string}){
  return(
    <p className={`${styles.label}`}>
      {title}
      <Required_sign />
      </p>
  );
}
function Custom_label({title, label_class}:{title:string, label_class: string}){
  return(
    <p className={styles[label_class]}>
      {title}
      <Required_sign />
      </p>
  );
}

function Input_text({placeholder}:{placeholder:string}){
  return(
    <input className={styles.input_text} type="text" placeholder={placeholder}/>
  );
}
function Custom_input_text({placeholder,inputclass}:{placeholder:string,inputclass:string}){
  return(
    <textarea className={styles[inputclass]} placeholder={placeholder}/>
  );
}
function Input_textarea(){
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  return (
    <div className={styles.ckeditor}>
      <MyEditor
        name="Editor"
        onChange={(data: React.SetStateAction<string>) => {
          setData(data);
        } }
        editorLoaded={editorLoaded} value={undefined}     />

      {/* {JSON.stringify(data)} */}
    </div>
  );
}
function Input_select({options, placeholder, defautlValue}:{options: any, placeholder: any,defautlValue: any}) {
  return(
    <div className={styles.input_select}>
        <Select 
        options={options}
        placeholder={placeholder}
        defaultValue={defautlValue}
        />
    </div>
  );
}
function Input_calender({placeholder,datetype}:{placeholder: string,datetype:string}){
  const [input, setInput] = React.useState(`${placeholder}`);
  const dateHandle = (event : React.ChangeEvent<HTMLInputElement>) =>{
    setInput(event.target.value);
  };
  return(
    <div className={styles.calender}>
      <input onChange={dateHandle} type={datetype} className={styles.calender_input} />
      <label className={styles.calender_label}>{input}</label>
    </div>
  );
}
function Input_checkbox(){
  return(
    <div className={styles.checkbox}>
      <label className={styles.checkbox_label}>
        Văn bản gồm nhiều người kí: 
      </label>
      <input type="checkbox" />
    </div>
  );
}
function Input_file(){
  return(
    <div className={styles.input_file_section}>
      <div className={styles.input_file_subsection}>
        <input type="file" multiple/>
      </div>
    </div>
  );
}
function Input_file_2(){
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event : ChangeEvent<HTMLInputElement>) => {
    if (event.target.files){
      const files : File[] = Array.from(event.target.files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    }
  };
  const handleDelete = (index: number) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((file, i) => i!== index));
  }

  return (
    <div className={styles.input_file_2_form}>
      <div>
        <ul className={styles.frameimg}>
          {selectedFiles.map((file, index) => (
            <li key={index}>
              <div className={styles.file_list}>
                <div className={styles.file_name}>
                  {file.name}
                </div>
                <div className={styles.deletefile_btn_container}>
                  <button className={styles.deletefile_btn} onClick={()=>handleDelete(index)} >x</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <label htmlFor="file2" className={styles.add_img}>
            Chọn file đính kèm
          </label>
          <input
            id="file2"
            type="file"
            className={styles.display_none}
            onChange={handleFileChange}
            multiple
          />
        </div>
      </div>
    </div>
  );
}
function Required_sign(){
  return(
    <span className={styles.required_sign}>*</span>
  );
}
function Section({label, input, style}:{label:any, input:any,style: string}){
  return(
    <div className={styles[style]}>
      {label}
      {input}
    </div>
  )
}
function SwitchInput({ label, id }:{label:string, id:string}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.switchContainer}>
      <label className={styles.switchLabel} htmlFor={id}>
        {label}
      </label>
      <div className={styles.switchWrapper}>
        <label className={styles.switch}>
          <input
            className={styles.switch_input}
            id={id}
            type="checkbox"
            checked={isChecked}
            onChange={handleInputChange}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
}
const Index = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData.entries());
    setFormData(data);
  };
  useEffect(() => {
    const JSONdata = JSON.stringify(formData)
    console.log("Form data updated:", JSONdata);
  }, [formData]);
  return (
    <div>
      <Head>
        <title> Thêm văn bản đi </title>
        <meta name="keywords" content="Home" />
        <link rel="shortcut icon" href="https://timviec365.vn/favicon.ico" />
      </Head>
      <div className={styles.body}>
        <div className={styles.destination}>
          <Destination des="Gửi trong công ty"></Destination>
          <Destination des="Gửi ngoài công ty"></Destination>
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <div className={styles.form_container}>
            <FormLeft />
            <FormRight />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;