import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage: Storage;

  constructor(private router: Router) {
    this.storage = window.localStorage;
  }

  setItem(key: string, value: unknown): void {
    try {
      const serializedValue = JSON.stringify(value);
      this.storage.setItem(key, serializedValue);
    } catch (e) {
      console.error(`Error setting value for key ${key}:`, e);
    }
  }

  getItem<T>(key: string): T | null {
    const item = this.storage.getItem(key);
    if (item === null) {
      return null;
    }
    try {
      const parsedValue = JSON.parse(item) as T;
      return parsedValue;
    } catch (e) {
      console.error(`Error getting value for key ${key}:`, e);
      return null;
    }
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }
  
  isLoggedIn(): boolean {
    const user = this.getItem<{ 
      id: number, 
      role: string, 
      access_token: string, 
      username: string 
    }>('myuser');

    if(user && user.username){
      return true;
    }
    return false;
  }
  
  isLoggedInAs(role:string): boolean {
    const user = this.getItem<{ 
      id: number, 
      role: string, 
      access_token: string,
      username: string 
    }>('myuser');
    if(user){
      if(user.role===role){ 
        return true
      }
    }
    return false;
  }
  
  /**
   * Get the storage, return null if there is nothing
   * @param key the key of the storage
   * @returns string | null 
   */
  public getStorage(key = 'myuser'): string | null {
    const storage = localStorage.getItem(key);
    if (storage) return storage;
    return null;
  }

  public getTokenFromStorage(storageKey: string): string {
    const storage = JSON.parse(this.getStorage(storageKey) as string);
    return storage.access_token;
  }
}

