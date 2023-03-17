
import  './ContactUs.css';
function ContactUs(){
    return(
        <>
    <article id='ContactBox'>
        <div id="ContactWrap">
            <h2>Get in touch</h2>
            <p>You can contact us online, visit or give us call.</p>
            <div>
               <ul>
                <li><strong>Address</strong> <br/> Inbody Bldg. 625<br/> Eonju-ro Gangnam-gu, Seoul<br/> 06106 Korea</li>
                <li><strong>E-mail</strong> <br/> info@inbody.com</li>
                <li><strong>Tel</strong> <br/> +82-2-501-3939</li>
            </ul> 
                </div>

        </div>
    </article>


    <article id='ContactInput'>  
          <h2>Contact us</h2>
        <div id='ContactInputWrap'>


<div id="SelectSection">
    <div>
        <label for="device"><span className='redS' >*</span>구분</label>
        <select name="category">
            <option value="제품구입">제품구입</option>
            <option value="A/S문의">A/S문의</option>
            <option value="언론보도">언론보도</option>
            <option value="채용">채용</option>
            <option value="투자">투자</option>
            <option value="제휴문의">제휴문의</option>
            <option value="기타">기타</option>
        </select>
     </div>

    <div>
         <label for="device"><span className='redS' >*</span>제품군</label>
         <select id="device" name="device">
            <option value="체성분분석기">체성분분석기</option>
            <option value="체수분측정기">체수분측정기</option>
            <option value="혈압계">혈압계</option>
            <option value="신장계">신장계</option>
            <option value="가정용">가정용</option>
            <option value="웰니스">웰니스</option>
            <option value="솔루션">솔루션</option>
        </select>    
    
     </div>
</div>

                <div class="section">

    	<div class="input-field">
    	<label for="companyName"><span className='redS' >*</span>소속</label>
     		<input type="text" id="companyName" name="company_name"/>
       		</div>

        	<div class="input-field">
            <label for="userName"><span className='redS'>*</span>이름</label>
            	<input type="text" id="userName" name="name"/>
            </div>

            	</div>


           	<div class="section">

          	<div class="input-field">
            	<label for="phone"><span className='redS'>*</span>연락처</label>
          <input type="text" id="phone" name="hp" maxlength="20" class="txt-only-number"/>
            </div>

            		<div class="input-field input-email">
          	<label for="email"><span className='redS'>*</span>이메일</label>
            <input type="text" id="email" name="email"/>
            	</div>

            	</div>




                 <div class="section1">

              <div >
               <label for="addrt"><span className='redS'>*</span>주소</label>
            <input type="text" id='inputText'/>
              <a href="#">우편번호 검색</a>
            </div>

              <div >
                <input type="text" name="addr" id="addr" placeholder="주소를 입력하세요."/>
                </div>

            <div >
                 <input type="text" name="addr2" placeholder="상세 주소를 입력하세요."/>
               </div>

                  </div>

           	<div class="section2">
          	<div >
           	<label for="message"><span className='redS'>*</span>내용</label>
         	<textarea for="message" name="content" title="문의사항입력란" placeholder=""></textarea>
          	<div class="txt-right txt-color-gray mt-10">(<span id="content_len">0/500</span>)</div>
         		</div>
        	</div>

        <div class="checkbox">
         	<div class="check-set">
          	<input type="checkbox" id="agree" name="agree" value="Y"/>
          	<label for="agree"><a href="#" target="_blank">개인정보 수집 및 이용약관</a>을 확인하였으며, 이에 동의합니다. </label>
           	</div>
          </div>


<div id='inputbtn'>
    <button id='redbtn'>확인</button>
    <button id='blackbtn'>취소</button>
</div>
</div>
    </article>
    </>)
}

export default ContactUs;