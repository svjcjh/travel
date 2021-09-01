package com.haoge.travel.model;

public class Admin {
    private Integer adminId;

    private String adminAccount;

    private String adminPassword;

    private Byte adminLock;

    public Integer getAdminId() {
        return adminId;
    }

    public void setAdminId(Integer adminId) {
        this.adminId = adminId;
    }

    public String getAdminAccount() {
        return adminAccount;
    }

    public void setAdminAccount(String adminAccount) {
        this.adminAccount = adminAccount;
    }

    public String getAdminPassword() {
        return adminPassword;
    }

    public void setAdminPassword(String adminPassword) {
        this.adminPassword = adminPassword;
    }

    public Byte getAdminLock() {
        return adminLock;
    }

    public void setAdminLock(Byte adminLock) {
        this.adminLock = adminLock;
    }
}