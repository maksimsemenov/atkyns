const i130 = (doc, data = {}) => {
  doc.addPage({
    margins: {
      left: 25,
      right: 18
    }
  })
  // Frames
  //Top
  doc.rect(25, 56, 570, 5).fill('#000')
  doc.rect(25, 63, 570, 1).fill('#000')
  //Top table
  doc.rect(25, 75, 570, 1).fill('#000')
  doc.rect(25, 204, 570, 1).fill('#000')
  doc.rect(25, 75, 1, 130).fill('#000') //v
  doc.rect(156, 75, 1, 130).fill('#000') //v
  doc.rect(345, 75, 1, 130).fill('#000') //v
  doc.rect(594, 75, 1, 130).fill('#000') //v
  doc.rect(25, 89, 131, 0.3).fill('#000')
  doc.rect(25, 135, 131, 0.3).fill('#000')
  doc.rect(346, 142, 248, 0.3).fill('#000')
  doc.rect(420, 153, 99, 0.3).fill('#000')

  //Separators
  doc.rect(25, 221, 570, 1).fill('#000')
  doc.rect(25, 240, 570, 1).fill('#000')
  doc.rect(255, 240, 0.3, 29).fill('#000') //v
  doc.rect(388, 240, 0.3, 29).fill('#000') //v
  doc.rect(25, 268, 570, 1).fill('#000')
  doc.rect(25, 285, 570, 1).fill('#000')

  doc.rect(25, 315, 280, 1).fill('#000')
  doc.rect(314, 315, 280, 1).fill('#000')
  doc.rect(33, 343, 270, 0.3).fill('#000')
  doc.rect(322, 343, 270, 0.3).fill('#000')

  doc.rect(25, 373, 280, 1).fill('#000')
  doc.rect(314, 373, 280, 1).fill('#000')

  doc.rect(25, 399, 280, 1).fill('#000')
  doc.rect(314, 399, 280, 1).fill('#000')

  doc.rect(25, 436, 280, 1).fill('#000')
  doc.rect(314, 436, 280, 1).fill('#000')

  doc.rect(25, 462, 280, 1).fill('#000')
  doc.rect(314, 462, 280, 1).fill('#000')

  doc.rect(25, 487, 280, 1).fill('#000')
  doc.rect(314, 487, 280, 1).fill('#000')

  doc.rect(25, 514, 280, 1).fill('#000')
  doc.rect(314, 514, 280, 1).fill('#000')
  doc.rect(33, 541, 165, 0.3).fill('#000')
  doc.rect(212, 541, 92, 0.3).fill('#000')
  doc.rect(322, 541, 165, 0.3).fill('#000')
  doc.rect(502, 541, 92, 0.3).fill('#000')

  doc.rect(25, 559, 280, 1).fill('#000')
  doc.rect(55, 624, 230, 0.3).fill('#000')

  doc.rect(314, 559, 280, 1).fill('#000')
  doc.rect(314, 574, 280, 1).fill('#000')
  doc.rect(322, 607, 270, 0.3).fill('#000') // not exactly
  doc.rect(322, 636, 270, 0.3).fill('#000') // not exactly
  // I-94 number
  doc.rect(322, 621, 0.3, 11).fill('#000') //v
  doc.rect(336, 621, 0.3, 11).fill('#000') //v
  doc.rect(350, 621, 0.3, 11).fill('#000') //v
  doc.rect(364, 621, 0.3, 11).fill('#000') //v
  doc.rect(364, 624, 10, 5).fill('#000')
  doc.rect(374, 621, 0.3, 11).fill('#000') //v
  doc.rect(388, 621, 0.3, 11).fill('#000') //v
  doc.rect(402, 621, 0.3, 11).fill('#000') //v
  doc.rect(416, 621, 0.3, 11).fill('#000') //v
  doc.rect(430, 621, 0.3, 11).fill('#000') //v
  doc.rect(444, 621, 0.3, 11).fill('#000') //v
  doc.rect(458, 621, 0.3, 11).fill('#000') //v
  doc.rect(472, 621, 0.3, 11).fill('#000') //v

  doc.rect(25, 663, 280, 1).fill('#000')
  doc.rect(314, 663, 280, 1).fill('#000')
  doc.rect(322, 690, 270, 0.3).fill('#000') // not exactly

  doc.rect(25, 714, 280, 1).fill('#000')
  doc.rect(314, 714, 280, 1).fill('#000')
  doc.rect(411, 736, 72, 0.3).fill('#000')
  doc.rect(514, 736, 77, 0.3).fill('#000')

  doc.rect(25, 750, 570, 1).fill('#000')
  doc.rect(88, 762, 39, 0.3).fill('#000')
  doc.rect(179, 762, 39, 0.3).fill('#000')
  doc.rect(285, 762, 33, 0.3).fill('#000')
  doc.rect(340, 762, 33, 0.3).fill('#000')
  doc.rect(444, 762, 33, 0.3).fill('#000')
  doc.rect(505, 762, 33, 0.3).fill('#000')
  doc.rect(558, 762, 33, 0.3).fill('#000')
  doc.rect(25, 764, 570, 1).fill('#000')


  // Controls
  doc.rect(30, 102, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(30, 113, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(30, 124, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(30, 137, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(30, 148, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(30, 159, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(30, 170, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(30, 181, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(30, 192, 9, 9).lineWidth(0.4).stroke('#000')

  doc.rect(354, 159, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(354, 170, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(385, 170, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(354, 181, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(354, 192, 9, 9).lineWidth(0.4).stroke('#000')

  doc.rect(477, 159, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(477, 170, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(477, 181, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(477, 192, 9, 9).lineWidth(0.4).stroke('#000')
  // Relationship
  doc.rect(30, 255, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(103, 255, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(149, 255, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(216, 255, 9, 9).lineWidth(0.4).stroke('#000')

  doc.rect(268, 255, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(320, 255, 9, 9).lineWidth(0.4).stroke('#000')

  doc.rect(446, 255, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(488, 255, 9, 9).lineWidth(0.4).stroke('#000')
  // Petitioner gender
  doc.rect(132, 413, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(132, 424, 9, 9).lineWidth(0.4).stroke('#000')
  // Petitioner marital status
  doc.rect(194, 413, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(194, 424, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(247, 413, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(247, 424, 9, 9).lineWidth(0.4).stroke('#000')
  // Relative gender
  doc.rect(418, 413, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(418, 424, 9, 9).lineWidth(0.4).stroke('#000')
  // Relative marital status
  doc.rect(488, 413, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(488, 424, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(547, 413, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(547, 424, 9, 9).lineWidth(0.4).stroke('#000')
  //Petitioner status
  doc.rect(40, 587, 9, 9).lineWidth(0.4).stroke('#000') // not exactly
  doc.rect(40, 601, 9, 9).lineWidth(0.4).stroke('#000') // not exactly
  doc.rect(40, 627, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(55, 641, 9, 9).lineWidth(0.4).stroke('#000') // not exactly
  doc.rect(266, 641, 9, 9).lineWidth(0.4).stroke('#000') // not exactly
  // Relative status
  doc.rect(498, 563, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(539, 563, 9, 9).lineWidth(0.4).stroke('#000')
  //Petitioner status
  doc.rect(55, 737, 9, 9).lineWidth(0.4).stroke('#000') // not exactly
  doc.rect(111, 737, 9, 9).lineWidth(0.4).stroke('#000')
  // Relative imigration
  doc.rect(318, 726, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(350, 726, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(318, 739, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(368, 739, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(461, 739, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(514, 739, 9, 9).lineWidth(0.4).stroke('#000')


  // Text
  // Bold, 14
  doc.font('Times-Bold', 14)
  doc.text('I-130, Petition for Alien Relative', 320, 38, { align: 'right' })

  // Bold, 12
  doc.font('Times-Bold', 12)
  doc.text('A. Relationship', 25, 225)
  doc.text('B. Information about you', 25, 272.5)
  doc.text('C. Information about your relative', 315, 272.5)



  // Regular, 10
  doc.font('Times-Roman', 10)
  doc.text('A#', 30, 79)
  doc.text('Action Stamp', 160, 82)
  doc.text('Fee Stamp', 352, 82)

  // Bold, 10
  doc.font('Times-Bold', 10)
  doc.text('Remarks:', 30, 209)
  doc.text('You are the petitioner.   Your relative is the beneficiary.', 120, 227)


  // Bold, 9
  doc.font('Times-Bold', 9)
  doc.text('Department of Homeland Security', 25, 32)
  doc.text('DO NOT WRITE IN THIS BLOCK - FOR USCIS OFFICE ONLY', 25, 66, { align: 'center'})

  // Regular, 9
  doc.font('Times-Roman', 9)
  doc.text('U.S. Citizenship and Immigration Services', 25, 42)

  // Bold, 8
  doc.font('Times-Bold', 8)
  doc.text('1.  I am filing this petition for my:', 25, 244)
  doc.text('2.  Are you related by adoption?', 260, 244)
  doc.text('3.  Did you gain permanent residence through adoption?', 391, 244)

  doc.text('1.  Name', 25, 290)
  doc.text('1.  Name', 315, 290)

  doc.text('2.  Address', 25, 319)
  doc.text('2.  Address', 315, 319)

  doc.text('3.  Place of Birth', 25, 377)
  doc.text('3.  Place of Birth', 315, 377)

  doc.text('4.  Date of Birth', 25, 403)
  doc.text('5.  Gender', 131, 403)
  doc.text('6.  Marital Status', 206, 403)
  doc.text('4.  Date of Birth', 315, 403)
  doc.text('5.  Gender', 416, 403)
  doc.text('6.  Marital Status', 501, 403)

  doc.text('7.  Other Names Used', 25, 439)
  doc.text('7.  Other Names Used', 315, 439)

  doc.text('8.  Date and Place of Present Marriage', 25, 465)
  doc.text('8.  Date and Place of Present Marriage', 315, 465)

  doc.text('9.  U.S. Social Security Number', 25, 491)
  doc.text('10.  Alien Registration Number', 185, 491)
  doc.text('9.  U.S. Social Security Number', 315, 491)
  doc.text('10.  Alien Registration Number', 473, 491)

  doc.text('11.  Name(s) of Prior Spouse(s)', 25, 518)
  doc.text('12.  Date(s) Marriage(s) Ended', 197, 518)
  doc.text('11.  Name(s) of Prior Spouse(s)', 315, 518)
  doc.text('12.  Date(s) Marriage(s) Ended', 485, 518)

  doc.text('13.  If you are a U.S. citizen, complete the following:', 25, 564)
  doc.text('13.  Has your relative ever been in the U.S.?', 315, 564)
  doc.text('14.  If your relative is currently in the U.S., complete the following:', 315, 579)
  doc.text('14.  If your relative is currently in the U.S., complete the following:', 315, 590)





  // Regular, 8
  doc.font('Times-Roman', 8)
  doc.text('OMB No. 1615-0012;  Expires 12/31/2015', 320, 26, { align: 'right' })
  doc.text('Spouse', 43, 257)
  doc.text('Parent', 116, 257)
  doc.text('Brother/Sister', 162, 257)
  doc.text('Child', 229, 257)
  doc.text('Yes', 281, 257)
  doc.text('No', 333, 257)
  doc.text('Yes', 460, 257)
  doc.text('No', 501, 257)

  doc.text('(Family name in CAPS)', 55, 290)
  doc.text('(First)', 174, 290)
  doc.text('(Middle)', 241, 290)
  doc.text('(Family name in CAPS)', 345, 290)
  doc.text('(First)', 448, 290)
  doc.text('(Middle)', 542, 290)

  doc.text('(Number and Street)', 63, 319)
  doc.text('(Apt. No.)', 250, 319)
  doc.text('(Number and Street)', 353, 319)
  doc.text('(Apt. No.)', 551, 319)
  doc.text('(Town or City)', 33, 346)
  doc.text('(State/Country)', 141, 346)
  doc.text('(Zip/Postal Code)', 238, 346)
  doc.text('(Town or City)', 322, 346)
  doc.text('(State/Country)', 433, 346)
  doc.text('(Zip/Postal Code)', 527, 346)

  doc.text('(Town or City)', 84, 377)
  doc.text('(State/Country)', 233, 377)
  doc.text('(Town or City)', 375, 377)
  doc.text('(State/Country)', 527, 377)

  doc.text('Male', 144, 415)
  doc.text('Female', 144, 426)
  doc.text('Married', 207, 415)
  doc.text('Widowed', 207, 426)
  doc.text('Divorced', 259, 415)
  doc.text('Single', 259, 426)

  doc.text('Male', 431, 415)
  doc.text('Female', 431, 426)
  doc.text('Married', 501, 415)
  doc.text('Widowed', 501, 426)
  doc.text('Divorced', 559, 415)
  doc.text('Single', 559, 426)

  doc.text('(including maiden name)', 99, 439)
  doc.text('(including maiden name)', 390, 439)

  doc.text('(if married)', 158, 465)
  doc.text('(if married)', 448, 465)

  doc.text('(if any)', 132, 491)
  doc.text('(if any)', 422, 491)

  doc.text('My citizenship was acquired through (check one):', 40, 576)
  doc.text('Birth in the U.S.', 53, 589)
  doc.text('Naturalization.  Give certificate number and date and place of issuance.', 53, 603)
  doc.text('Parents.  Have you obtained a certificate of citizenship in your own name?', 53, 629)
  doc.text('Yes. Give certificate number, date and place of issuance.', 68, 643)
  doc.text('No', 279, 643)

  // Regular, 7
  doc.font('Times-Roman', 7)
  doc.text('201(b) Spouse - IR-1/CR-1', 43, 104)
  doc.text('201(b) Child - IR-2/CR-2', 43, 115)
  doc.text('201(b) Parent - IR-5', 43, 126)
  doc.text('203(a)(1) Unm. S or D - F1-1', 43, 139)
  doc.text('203(a)(2)(A)Spouse - F2-1', 43, 150)
  doc.text('203(a)(2)(A) Child - F2-2', 43, 161)
  doc.text('203(a)(2)(B) Unm. S or D - F2-4', 43, 172)
  doc.text('203(a)(3) Married  S or D - F3-1', 43, 183)
  doc.text('203(a)(4) Brother/Sister - F4-1', 43, 194)

  doc.text('Petition was filed on:', 354, 146)
  doc.text('(priority date)', 522, 146)

  doc.text('Personal Interview', 366, 161)
  doc.text('Pet.', 366, 172)
  doc.text('Ben. " A" File Reviewed', 398, 172)
  doc.text('Field Investigation', 366, 183)
  doc.text('203(a)(2)(A) Resolved', 366, 194)
  doc.text('Previously Forwarded', 489, 161)
  doc.text('I-485 Filed Simultaneously', 489, 172)
  doc.text('204(g) Resolved', 489, 183)
  doc.text('203(g) Resolved', 489, 194)

  // Bold, 7
  doc.font('Times-Bold', 7)
  doc.text('Section of Law/Visa Category', 30, 93)


// --------------------------------------------------------------------------
  /*
   * Second Page
   */
  doc.addPage()
  // Frames
  doc.rect(25, 38, 570, 5).fill('#000')
  doc.rect(25, 47, 570, 1).fill('#000')

  doc.rect(25, 110, 570, 1).fill('#000')
  doc.rect(33, 132, 559, 0.3).fill('#000')
  doc.rect(33, 154, 559, 0.3).fill('#000')
  doc.rect(33, 176, 559, 0.3).fill('#000')

  doc.rect(25, 198, 570, 1).fill('#000')
  doc.rect(25, 248, 570, 1).fill('#000')
  doc.rect(25, 289, 570, 1).fill('#000')
  doc.rect(25, 338, 570, 1).fill('#000')
  doc.rect(25, 377, 570, 1).fill('#000')

  doc.rect(34, 440, 200, 0.3).fill('#000')
  doc.rect(264, 440, 150, 0.3).fill('#000')
  doc.rect(419, 440, 172, 0.3).fill('#000')

  doc.rect(25, 477, 570, 1).fill('#000')
  doc.rect(25, 492, 570, 1).fill('#000')
  doc.rect(25, 522, 570, 1).fill('#000')
  doc.rect(25, 567, 570, 1).fill('#000')
  doc.rect(25, 674, 570, 1).fill('#000')
  doc.rect(25, 704, 570, 1).fill('#000')

  doc.rect(82, 750, 185, 0.3).fill('#000')
  doc.rect(309, 750, 180, 0.3).fill('#000')
  doc.rect(520, 750, 72, 0.3).fill('#000')

  doc.rect(82, 767, 230, 0.3).fill('#000')
  doc.rect(457, 767, 135, 0.3).fill('#000')

  doc.rect(25, 770, 570, 1).fill('#000')


  // Controls
  doc.rect(314, 527, 9, 9).lineWidth(0.4).stroke('#000')
  doc.rect(349, 527, 9, 9).lineWidth(0.4).stroke('#000')

  // End
  doc.end()
}

export default i130
