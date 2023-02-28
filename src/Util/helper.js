import CryptoJS from "crypto-js";

import CryptoJS from "crypto-js";

// Encrypt credentials
const secretKey = "asddserersantfsrbsjuhhfgddhjytghfrtgfg";
const plaintext = "myusername:mypassword";
const ciphertext = CryptoJS.AES.encrypt(plaintext, secretKey).toString();

// Send encrypted credentials over the network

// Decrypt credentials on the server-side
const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
const decryptedPlaintext = bytes.toString(CryptoJS.enc.Utf8);
// decryptedPlaintext should be 'myusername:mypassword'
