# Auth0 Verified Email Address Change

Self-service facility typically provides users with the capability to change one or more aspects of their user profile. Commonly referred to as _MyAccount_ or _MyProfile_ functionality, this often includes the ability for a user to change his/her email address, for cases where an existing email address is no longer valid or a different email address is preferred. Self-service email address change without the proper controls however, can lead to various account management issues, and/or expose security vulnerabilities which can be exploited. 

Verified Email Address Change workflow is provided as a customized extensibility solution, that leverages Auth0 functionality to address the sort of problems that can occur in unverified email address change scenarios. For further information regarding this, or any other Auth0 customized extensibility provided, please feel free to get in touch. 

<div align="center">
  <a href="https://auth0-1.wistia.com/medias/aycyjyjxqh"><img src="./Verified%20Email%20Address%20Change.png" alt="Verified Email Address Change workflow in Auth0"></a>
</div>

## Design documentation

[Custom Implementation](https://auth0.com/docs/services/packages#-custom-implementation-package-) to support functionality not supported out-of-the-box is provided by Auth0, and offers a wide variety of services to address a number of use case scenarios. These services can be leveraged to provide you with a complete solution for Verified Email Address Change - in either a stand-alone fashion or in conjunction with other customization. However we also provide you with full design documentation (see below) if you prefer to implement yourself.  

<div align="center">
  <a href="https://drive.google.com/open?id=1DtjpHFTwK6wN0B6BlaaXpbIFbU0BlUagDlymP0RGZgw"><img src="./Verified%20Email%20Address%20Change%20Design.png" alt="Verified Email Address Change workflow in Auth0 - Design Document"></a>
</div>

Detailed design documentation (follow link above to access) provides you with a comprehensive set of information that is implementation agnostic. Using this, you and your team can implement Verified Email Address Change workflow whatever the technology stack you currently, or indeed plan, to utilize. The information is provided free of charge and without warranty (either explicit or implied).    

## Sample implementation

This repository also contains sample implementation developed using [Node.js](https://nodejs.org/en/), and is provided to accelerate development of that part of the design which deals with actual [email address change](https://docs.google.com/document/d/1DtjpHFTwK6wN0B6BlaaXpbIFbU0BlUagDlymP0RGZgw/edit#bookmark=id.7i3duzkz1ihl). This implementation is provided free of charge and without warranty either explicit or implied. Please note that no sample implementation is provided for that part of the design dealing with [email address change initiation](https://docs.google.com/document/d/1DtjpHFTwK6wN0B6BlaaXpbIFbU0BlUagDlymP0RGZgw/edit#bookmark=id.2zd5mvs4taxv).

### Profile Management Application

The Profile [client](Profile/client) folder contains sample Node.js implementation 

### Profile Management Service

The Profile [service](Profile/service) folder contains sample Node.js implementation 

 and the [Express](https://expressjs.com/) framework

### Auth0 Configuration

## About Auth0

Auth0 is the flagship Platform-as-a-Service (PaaS) Identity and Access Management service from the company of the same same. Auth0 helps you to easily:

- authenticate using multiple identity providers, including social (e.g. Google, Facebook, Microsoft, LinkedIn, GitHub, Twitter, etc), or enterprise (e.g. Windows Azure AD, Google Apps, Active Directory, ADFS, SAML, etc),
- authenticate users via username/password, or passwordless mechanisms,
- implement multi-factor authentication,
- link multiple user identities to a single user account, 
- generate signed JSON Web Tokens to authorize API calls and flow user identity securely,
- access demographics and analytics, detailing how, when, and where users are logging in
- enrich user profiles from other data sources using customizable JavaScript Rules,
- and much, much more.
 
Go to [Auth0](https://auth0.com) and click Sign Up to create a free account in Auth0, although the customized extensibility provided here requires Auth0 functionality only available to paid subscribers.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them via the issues section of this repository. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## License

This project is licensed under an MIT LICENSE. Please see the [LICENSE](LICENSE) file for more info.
