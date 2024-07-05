import { secretKey } from "@lib/config/global-variable"
import SecureStorage from 'secure-web-storage';
import CryptoJS from 'crypto-js';

export const secureStorage = new SecureStorage(sessionStorage, {
    hash: function hash(key: any) {
        key = CryptoJS?.SHA256(key, secretKey)
        return key?.toString()
    },
    encrypt: function encrypt(data: any) {
        data = CryptoJS?.AES?.encrypt(data, secretKey)
        data = data?.toString()

        return data
    },
    decrypt: function decrypt(data: any) {
        data = CryptoJS?.AES?.decrypt(data, secretKey)
        data = data?.toString(CryptoJS.enc.Utf8)

        return data
    }
})