export const validation = {
  isDigits(value: any, callback: any) {
    if (isNaN(value)) {
      callback('Please enter only numbers');
    } else {
      callback('');
    }
  },
  isValidEmail(value: any, callback: any) {
    if (/\S+@\S+\.\S+/.test(value)) {
      callback('');
    } else {
      callback('please enter a valid email');
    }
  },
  isValidEmailCsv(value: any, callback: any) {
    if (!value) {
      callback('Please enter a comma separated list of emails');
      return;
    }
    const emails = value.replace(/\n/g, ',').split(',');

    const invalidEmails = [];
    emails.forEach((email: string) => {
      const re = /\S+@\S+\.\S+/;
      if (email !== '' && email !== ' ' && !re.test(email)) {
        invalidEmails.push(email);
      }
    });

    if (invalidEmails.length > 0) {
      callback('Please enter a valid comma separated list of emails');
    } else {
      callback('');
    }
  },
  isAlphabetic(value: any, callback: any) {
    if (/^[a-zA-Z]+$/.test(value)) {
      callback('');
    } else {
      callback('input must be alphabetic');
    }
  },
  isName(value: any, callback: any) {
    if (/^[a-z]+[-' ,]*[a-z]+$/i.test(value)) {
      callback('');
    } else {
      callback('name must be alphabetic or separated by a dash');
    }
  },
  isValidPhoneNo(value: any, code: any, callback: any) {
    // if (isValidPhoneNumber(value, code)) {
    //   callback('');
    // } else {
    //   callback('please enter a valid phone number');
    // }
    return {
      value,
      code,
      callback,
    };
  },
  isNumeric(value: any, callback: any) {
    if (/^\d+$/.test(value)) {
      callback('');
    } else {
      callback('input must be numeric');
    }
  },
  RCNumber(value: any, callback: any) {
    if (/^(RC)?[0-9]{5,8}$/.test(value) || /^(BN)?[0-9]{5,8}$/.test(value)) {
      callback('');
    } else {
      callback(
        'Please enter your registration number in the correct format including the RC/BN',
      );
    }
  },
};
